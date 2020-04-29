app.controller('SelfTriage', ['$scope', '$window', 'SelfTriageFactory', 'ngDialog', '$anchorScroll', function (
    $scope,
    $window,
    SelfTriageFactory,
    ngDialog,
    $anchorScroll
) {
    $scope.isLoadingPage = false
    $scope.isLoadingCountries = false
    $scope.isLoadingillnessesOrConditions = false

    $scope.selfTriageSection = {
        triageHome: true,
        triageDemographicsAsymptomatic: false,
        triageTestingAsymptomatic: false,
        triageTravelAsymptomatic: false,
        triageExposureAsymptomatic: false,
        triageDemographicsSymptomatic: false,
        triageTestingSymptomatic: false,
        triageTravelSymptomatic: false,
        triageExposureSymptomatic: false,
        triageILISymptomatic: false,
        triageSymptomsChecklistSymptomatic: false,
        triageComorbiditySymptomatic: false
    };

    $scope.selfTriageResultSection = {
        triageResultAllright: false,
        triageResultPUM: false,
        triageResultConfirmed: false,
        triageNoResults: false,
        triageResultProbable: false,
        triageResultNotcovid: false,
        triageResultSuspectA: false,
        triageResultSuspectB: false,
        caseAssgined: false
    };

    $scope.resultTitle = {
        allRight: "You’re All Right! | COVID - 19 Self Assessment and Triage Tool | Project Moses",
        tooSoon: "It’s Too Soon to Tell | COVID - 19 Self Assessment and Triage Tool | Project Moses",
        notCovid: "Looks Like It’s Not COVID - 19! | COVID - 19 Self Assessment and Triage Tool | Project Moses",
        probable: "You're a PROBABLE COVID-19 Case! | COVID-19 Self Assessment and Triage Tool | Project Moses",
        suspect: "You're a SUSPECT COVID-19 Case! | COVID-19 Self Assessment and Triage Tool | Project Moses",
        confirmed: "You're a CONFIRMED COVID-19 Case! | COVID-19 Self Assessment and Triage Tool | Project Moses"
    };

    $scope.selector = {
        countrySelector: '',
        diseasesSelector: ''
    }

    $scope.form = {
        triageUser: {
            symptom: {
                cough: false,
                troubleBreathing: false,
                soreThroat: false,
                fever: false,
                otherSymptoms: false
            },
            birthDate: {
                month: '',
                day: '',
                year: '',
                fullDate: ''
            },
            gender: '',
            pregnant: '',
            address: {
                region: '',
                city: '',
                barangay: ''
            },
            healthCareWorker: '',
            understoodTerms: false,
            track: '',
            testInfo: {
                tested: '',
                accreditedTester: '',
                result: ''
            },
            recentlyTraveled: '',
            countriesVisitedCountryCode: [],
            takenCaredOfConfirmedPatientsWithProperPPE: '',
            stayedInCloseWithProbableOrConfirmed: '',
            traveledTogetherWithConfirmed: '',
            symptomStartsWithin14DaysBeingInCountry: '',
            ppe14Days: '',
            environment14Days: '',
            symptomsStartWithin14DaysBeingExposed: '',
            iliExposureHistory: '',
            otherSeriousillnessesOrConditions: '',
            otherSeriousIllnessesOrConditionsList: [],
            symptomsChecklist: {
                fever: '',
                sputumProduction: '',
                myalgia: '',
                nausea: '',
                diarrhea: '',
                dryCough: '',
                soreThroat: '',
                arthralgia: '',
                vomiting: '',
                difficultyBreathing: '',
                fatigue: '',
                headaches: '',
                chills: '',
                nasalCongestion: '',
                shortnessOfBreath: ''
            }
        }
    };

    $scope.months = [
        {
            fullMonth: 'January (01)',
            shortMonth: '01'
        },
        {
            fullMonth: 'February (02)',
            shortMonth: '02'
        },
        {
            fullMonth: 'March (03)',
            shortMonth: '03'
        },
        {
            fullMonth: 'April (04)',
            shortMonth: '04'
        },
        {
            fullMonth: 'May (05)',
            shortMonth: '05'
        },
        {
            fullMonth: 'June (06)',
            shortMonth: '06'
        },
        {
            fullMonth: 'July (07)',
            shortMonth: '07'
        },
        {
            fullMonth: 'August (08)',
            shortMonth: '08'
        },
        {
            fullMonth: 'September (09)',
            shortMonth: '09'
        },
        {
            fullMonth: 'October (10)',
            shortMonth: '10'
        },
        {
            fullMonth: 'November (11)',
            shortMonth: '11'
        },
        {
            fullMonth: 'December (12)',
            shortMonth: '12'
        },
    ];

    $scope.buttonStatus = {
        noSymptoms: false,
        proceedTriageDemographicsAsymptomatic: false,
        proceedTriageTestingAsymptomatic: false,
        proceedTriageTravelAsymptomatic: false,
        proceedtriageExposureAsymptomatic: false,
        proceedTriageDemographicsSymptomatic: false,
        proceedTriageTestingSymptomatic: false,
        proceedTriageTravelSymptomatic: false,
        proceedTriageExposureSymptomatic: false,
        proceedILIExposureHistorySymptomatic: false,
        proceedTriageComorbiditySymptomatic: false,
        proceedTriageSymptomsChecklistSymptomatic: false
    };

    $scope.showField = {
        ageResponse: false,
        addressResponse: false,
        triageTestingAsymptomatic: false
    };

    $scope.customValues = {
        age: 0,
        address: '',
        customValues: '',
        matchCountrySelected: false,
        directExposureHistory: false,
        months: 0,
        additionalRoute: '',
        additionalRoute2: ''
    };

    $scope.countries = [];
    $scope.illnessesOrConditions = [
        "Diabetes mellitus",
        "Cardiovascular Disease",
        "Hypertension",
        "Cancer",
        "Autoimmune Diseases",
        "Leukemia",
        "Chronic Obstructive Pulmonary Disease (COPD)"
    ];
    $scope.visitedCountries = [];
    $scope.comorbidList = [];

    $scope.endResult = "";
    $scope.lastYear = new Date().getFullYear() - 1;

    $scope.emptyCheckList = {
        fever: '',
        sputumProduction: '',
        myalgia: '',
        nausea: '',
        diarrhea: '',
        dryCough: '',
        soreThroat: '',
        arthralgia: '',
        vomiting: '',
        difficultyBreathing: '',
        fatigue: '',
        headaches: '',
        chills: '',
        nasalCongestion: '',
        shortnessOfBreath: ''
    };

    $scope.showViolator = false

    init();

    function init() {
        console.log($scope.form)
        var windowElement = angular.element($window);
        windowElement.on('beforeunload', function (event) {
            // Do whatever you want in here before the page unloads.        
            event.returnValue = "Refresh is disabled";
            // The following line of code will prevent reload or navigating away.
            event.preventDefault();
        });
        // getAllLocationsPH();
    }

    $scope.$watch("form.triageUser", function () {
        $scope.form.triageUser.pregnant = $scope.form.triageUser.gender === 'male' ? 'no' : $scope.form.triageUser.pregnant

        if ($scope.form.triageUser.track === 'asymptomatic') {
            $scope.buttonStatus.proceedTriageDemographicsAsymptomatic = $scope.showField.ageResponse
                && $scope.showField.addressResponse && $scope.form.triageUser.gender !== ''
                && $scope.form.triageUser.pregnant !== '' && $scope.form.triageUser.healthCareWorker !== '' ? true : false

            if ($scope.form.triageUser.testInfo.tested === 'no') {
                $scope.form.triageUser.testInfo.accreditedTester = '';
                $scope.form.triageUser.testInfo.result = '';
                $scope.buttonStatus.proceedTriageTestingAsymptomatic = true;
            } else if ($scope.form.triageUser.testInfo.tested === 'yes') {
                if ($scope.form.triageUser.testInfo.accreditedTester === 'no') {
                    $scope.buttonStatus.proceedTriageTestingAsymptomatic = true;
                    $scope.endResult = 'probable'
                    $window.document.title = $scope.endResult === 'probable' ? $scope.resultTitle.probable : 'Project Moses';
                } else if ($scope.form.triageUser.testInfo.accreditedTester === 'yes') {
                    if ($scope.form.triageUser.testInfo.result === 'positive') {
                        $scope.endResult = 'positive';
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                        $window.document.title = $scope.endResult === 'positve' ? $scope.resultTitle.positive : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'negative') {
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                    } else if ($scope.form.triageUser.testInfo.result === 'inconclusive') {
                        $scope.endResult = 'inconclusive';
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'have-not-received-yet') {
                        $scope.endResult = 'have-not-received-yet';
                        $scope.buttonStatus.proceedTriageTestingAsymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    }
                }
            }

            $scope.form.triageUser.countriesVisitedCountryCode = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.form.triageUser.countriesVisitedCountryCode
            $scope.visitedCountries = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.visitedCountries

            if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                $scope.buttonStatus.proceedTriageTravelAsymptomatic = $scope.form.triageUser.countriesVisitedCountryCode.length > 0 ? true : false
                console.log("$scope.form.triageUser.countriesVisitedCountryCode.length", $scope.form.triageUser.countriesVisitedCountryCode.length)
            } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                $scope.buttonStatus.proceedTriageTravelAsymptomatic = true
            }

            if (
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE === 'no'
                && $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed === 'no'
                && $scope.form.triageUser.traveledTogetherWithConfirmed === 'no'
            ) {
                $scope.endResult = 'allright'
                $scope.buttonStatus.proceedtriageExposureAsymptomatic = true;
                $window.document.title = $scope.endResult === 'allright' ? $scope.resultTitle.allRight : 'Project Moses';
            } else if (
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE !== ''
                && $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed !== ''
                && $scope.form.triageUser.traveledTogetherWithConfirmed !== ''
            ) {
                $scope.endResult = 'pum'
                $scope.buttonStatus.proceedtriageExposureAsymptomatic = true;
                $window.document.title = $scope.endResult === 'allright' ? $scope.resultTitle.probable : 'Project Moses';
            }
        } else if ($scope.form.triageUser.track === 'symptomatic') {
            $scope.buttonStatus.proceedTriageDemographicsSymptomatic = $scope.showField.ageResponse
                && $scope.showField.addressResponse && $scope.form.triageUser.gender !== ''
                && $scope.form.triageUser.pregnant !== '' && $scope.form.triageUser.healthCareWorker !== '' ? true : false

            if ($scope.form.triageUser.testInfo.tested === 'no') {
                $scope.form.triageUser.testInfo.accreditedTester = '';
                $scope.form.triageUser.testInfo.result = '';
                $scope.buttonStatus.proceedTriageTestingSymptomatic = true;
            } else if ($scope.form.triageUser.testInfo.tested === 'yes') {
                if ($scope.form.triageUser.testInfo.accreditedTester === 'no') {
                    $scope.buttonStatus.proceedTriageTestingSymptomatic = true;
                    $scope.endResult = 'probable'
                    $window.document.title = $scope.endResult === 'probable' ? $scope.resultTitle.probable : 'Project Moses';
                } else if ($scope.form.triageUser.testInfo.accreditedTester === 'yes') {
                    if ($scope.form.triageUser.testInfo.result === 'positive') {
                        $scope.endResult = 'positive';
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                        $window.document.title = $scope.endResult === 'positve' ? $scope.resultTitle.positive : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'negative') {
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                    } else if ($scope.form.triageUser.testInfo.result === 'inconclusive') {
                        $scope.endResult = 'inconclusive';
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    } else if ($scope.form.triageUser.testInfo.result === 'have-not-received-yet') {
                        $scope.endResult = 'have-not-received-yet';
                        $scope.buttonStatus.proceedTriageTestingSymptomatic = true
                        $window.document.title = $scope.endResult === 'inconclusive' ? $scope.resultTitle.probable : 'Project Moses';
                    }
                }
            }

            $scope.form.triageUser.countriesVisitedCountryCode = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.form.triageUser.countriesVisitedCountryCode;
            $scope.visitedCountries = $scope.form.triageUser.recentlyTraveled === 'no' ? [] : $scope.visitedCountries;
            $scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry = $scope.form.triageUser.recentlyTraveled === 'yes' ? $scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry : '';

            if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'no') {
                $scope.emptyCheckList.fever = $scope.form.triageUser.symptom.fever === true ? 'yes' : ''
                $scope.emptyCheckList.difficultyBreathing = $scope.form.triageUser.symptom.troubleBreathing === true ? 'yes' : ''
                $scope.emptyCheckList.soreThroat = $scope.form.triageUser.symptom.soreThroat === true ? 'yes' : ''
                $scope.emptyCheckList.dryCough = $scope.form.triageUser.symptom.cough === true ? 'yes' : ''
                $scope.form.triageUser.symptomsChecklist = $scope.emptyCheckList;
                console.log("$scope.form.triageUser.symptomsChecklist", $scope.form.triageUser.symptomsChecklist)
            }

            if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                $scope.buttonStatus.proceedTriageTravelSymptomatic = $scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry !== ''
                    && $scope.form.triageUser.countriesVisitedCountryCode.length > 0 ? true : false
                console.log("$scope.form.triageUser.countriesVisitedCountryCode.length", $scope.form.triageUser.countriesVisitedCountryCode.length)
            } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                $scope.buttonStatus.proceedTriageTravelSymptomatic = true
            }

            $scope.form.triageUser.environment14Days = $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed === 'no' ? 'no' : $scope.form.triageUser.environment14Days;
            $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed = $scope.form.triageUser.traveledTogetherWithConfirmed === 'no' ? 'no' : $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed;
            $scope.form.triageUser.ppe14Days = $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE === 'no' ? 'no' : $scope.form.triageUser.ppe14Days

            $scope.buttonStatus.proceedTriageExposureSymptomatic =
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE !== ''
                    && $scope.form.triageUser.ppe14Days !== ''
                    && $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed !== ''
                    && $scope.form.triageUser.environment14Days !== ''
                    && $scope.form.triageUser.traveledTogetherWithConfirmed !== ''
                    && $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed !== ''
                    ? true : false

            $scope.customValues.directExposureHistory =
                $scope.form.triageUser.takenCaredOfConfirmedPatientsWithProperPPE === 'yes'
                    || $scope.form.triageUser.ppe14Days === 'yes'
                    || $scope.form.triageUser.stayedInCloseWithProbableOrConfirmed === 'yes'
                    || $scope.form.triageUser.environment14Days === 'yes'
                    || $scope.form.triageUser.traveledTogetherWithConfirmed === 'yes'
                    || $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed === 'yes'
                    ? true : false

            $scope.buttonStatus.proceedILIExposureHistorySymptomatic = $scope.form.triageUser.iliExposureHistory !== '' ? true : false

            $scope.form.triageUser.otherSeriousIllnessesOrConditionsList = $scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no' ? [] : $scope.form.triageUser.otherSeriousIllnessesOrConditionsList;
            $scope.comorbidList = $scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no' ? [] : $scope.comorbidList
            if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'yes') {
                $scope.buttonStatus.proceedTriageComorbiditySymptomatic = $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length > 0 ? true : false
                $scope.endResult = "SuspectB";
            } else if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no') {
                $scope.buttonStatus.proceedTriageComorbiditySymptomatic = true;
                console.log("$scope.form.triageUser.otherSeriousIllnessesOrConditions", $scope.form.triageUser.otherSeriousIllnessesOrConditions)
            }

            $scope.form.triageUser.symptomsChecklist.fever = $scope.form.triageUser.symptom.fever === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.fever
            $scope.form.triageUser.symptomsChecklist.difficultyBreathing = $scope.form.triageUser.symptom.troubleBreathing === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.difficultyBreathing
            $scope.form.triageUser.symptomsChecklist.soreThroat = $scope.form.triageUser.symptom.soreThroat === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.soreThroat
            $scope.form.triageUser.symptomsChecklist.dryCough = $scope.form.triageUser.symptom.cough === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.dryCough

            console.log($scope.form.triageUser.symptomsChecklist)
            $scope.buttonStatus.proceedTriageSymptomsChecklistSymptomatic =
                $scope.form.triageUser.symptomsChecklist.fever !== ''
                    || $scope.form.triageUser.symptomsChecklist.sputumProduction !== ''
                    || $scope.form.triageUser.symptomsChecklist.myalgia !== ''
                    || $scope.form.triageUser.symptomsChecklist.nausea !== ''
                    || $scope.form.triageUser.symptomsChecklist.diarrhea !== ''
                    || $scope.form.triageUser.symptomsChecklist.dryCough !== ''
                    || $scope.form.triageUser.symptomsChecklist.soreThroat !== ''
                    || $scope.form.triageUser.symptomsChecklist.arthralgia !== ''
                    || $scope.form.triageUser.symptomsChecklist.vomiting !== ''
                    || $scope.form.triageUser.symptomsChecklist.difficultyBreathing !== ''
                    || $scope.form.triageUser.symptomsChecklist.fatigue !== ''
                    || $scope.form.triageUser.symptomsChecklist.headaches !== ''
                    || $scope.form.triageUser.symptomsChecklist.chills !== ''
                    || $scope.form.triageUser.symptomsChecklist.nasalCongestion !== ''
                    || $scope.form.triageUser.symptomsChecklist.shortnessOfBreath !== '' ? true : false
        }
    }, true);

    $scope.$watch("selfTriageSection", function () {
        console.log($scope.selfTriageSection)
        if ($scope.selfTriageSection.triageTravelSymptomatic || $scope.selfTriageSection.triageTravelAsymptomatic) {
            getCountries();
        }
    }, true)

    $scope.$watch("selfTriageResultSection", function (oldValue, newValue) {
        var selfTriageResultSection = oldValue;
        for (var results in selfTriageResultSection) {
            if (selfTriageResultSection[results] === true) {
                $scope.showViolator = true;
                break;
            }
        }
    }, true)

    function resetForm() {
        $scope.form = {
            triageUser: {
                symptom: {
                    cough: false,
                    troubleBreathing: false,
                    soreThroat: false,
                    fever: false,
                    otherSymptoms: false
                },
                birthDate: {
                    month: '',
                    day: '',
                    year: '',
                    fullDate: ''
                },
                gender: '',
                pregnant: '',
                address: {
                    region: '',
                    city: '',
                    barangay: ''
                },
                healthCareWorker: '',
                understoodTerms: false,
                track: '',
                testInfo: {
                    tested: '',
                    accreditedTester: '',
                    result: ''
                },
                recentlyTraveled: '',
                countriesVisitedCountryCode: [],
                takenCaredOfConfirmedPatientsWithProperPPE: '',
                stayedInCloseWithProbableOrConfirmed: '',
                traveledTogetherWithConfirmed: '',
                symptomStartsWithin14DaysBeingInCountry: '',
                ppe14Days: '',
                environment14Days: '',
                symptomsStartWithin14DaysBeingExposed: '',
                iliExposureHistory: '',
                otherSeriousillnessesOrConditions: '',
                otherSeriousIllnessesOrConditionsList: [],
                symptomsChecklist: {
                    fever: '',
                    sputumProduction: '',
                    myalgia: '',
                    nausea: '',
                    diarrhea: '',
                    dryCough: '',
                    soreThroat: '',
                    arthralgia: '',
                    vomiting: '',
                    difficultyBreathing: '',
                    fatigue: '',
                    headaches: '',
                    chills: '',
                    nasalCongestion: '',
                    shortnessOfBreath: ''
                }
            }
        };
    }

    function getAllLocationsPH() {
        var promise = SelfTriageFactory.getAllLocationsPhilippines()
        promise.then(function (data) {
            console.log("getAllLocationsPH -> data", data)
        }).catch(function (error) {
            console.log("getAllLocationsPH -> error", error)
        })
    }

    function getCountries() {
        $scope.isLoadingCountries = true
        var promise = SelfTriageFactory.getCountries()
        promise.then(function (data) {
            $scope.countries = data.data;
            $scope.isLoadingCountries = false
            console.log("getCountries -> $scope.countries", $scope.countries)
        }).catch(function (error) {
            $scope.isLoadingCountries = false
            console.log("getAllLocationsPH -> error", error)
        })
    }

    function getIllnessesOrConditions() {
        $scope.isLoadingillnessesOrConditions = true
        var promise = SelfTriageFactory.getIllnessesOrConditions()
        promise.then(function (data) {
            $scope.illnessesOrConditions = data.data;
            $scope.isLoadingillnessesOrConditions = false
            console.log("getIllnessesOrConditions -> $scope.illnessesOrConditions", $scope.illnessesOrConditions)
        }).catch(function (error) {
            $scope.isLoadingCountries = false
            console.log("getAllLocationsPH -> error", error)
        })
    }

    $scope.symptomClicked = function (symptom) {
        $scope.form.triageUser.symptom[symptom] = $scope.form.triageUser.symptom[symptom] === true ? false : true

        $scope.form.triageUser.symptomsChecklist.fever = $scope.form.triageUser.symptom.fever === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.fever
        $scope.form.triageUser.symptomsChecklist.difficultyBreathing = $scope.form.triageUser.symptom.troubleBreathing === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.difficultyBreathing
        $scope.form.triageUser.symptomsChecklist.soreThroat = $scope.form.triageUser.symptom.soreThroat === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.soreThroat
        $scope.form.triageUser.symptomsChecklist.dryCough = $scope.form.triageUser.symptom.cough === true ? 'yes' : $scope.form.triageUser.symptomsChecklist.dryCough

        $scope.buttonStatus.noSymptoms = $scope.form.triageUser.symptom.cough === true || $scope.form.triageUser.symptom.troubleBreathing === true
            || $scope.form.triageUser.symptom.soreThroat === true || $scope.form.triageUser.symptom.fever === true
            || $scope.form.triageUser.symptom.otherSymptoms === true ? true : false
        console.log("$scope.symptomClicked -> $scope.buttonStatus.noSymptoms", $scope.buttonStatus.noSymptoms)
        console.log("$scope.symptomClicked -> $scope.form.triageUser.symptom", $scope.form.triageUser.symptom)
    }

    $scope.goToNextSection = function (section) {
        for (var t in $scope.selfTriageSection) {
            if ($scope.selfTriageSection[t]) {
                $scope.selfTriageSection[t] = false
            }
        }
        $anchorScroll("mainContent");
        if (section === "selected-symptoms") {
            if (
                $scope.form.triageUser.symptom.cough === false
                && $scope.form.triageUser.symptom.troubleBreathing === false
                && $scope.form.triageUser.symptom.soreThroat === false
                && $scope.form.triageUser.symptom.fever === false
                && $scope.form.triageUser.symptom.otherSymptoms === false
            ) {
                Swal.fire('Warning!', 'Please select at least one symptom to proceed.', 'warning');
                $scope.selfTriageSection.triageHome = true
            } else {
                console.log("have selected at least one symptom")
                $scope.form.triageUser.track = 'symptomatic';
                $scope.selfTriageSection.triageDemographicsSymptomatic = true
                console.log($scope.form.triageUser.symptom)
            }
        } else if (section === "no-symptoms") {
            console.log("No symptoms")
            $scope.form.triageUser.track = 'asymptomatic';
            $scope.selfTriageSection.triageDemographicsAsymptomatic = true
        }

        if ($scope.form.triageUser.track === 'asymptomatic') {
            if (section === 'testing-asymptomatic') {
                $scope.selfTriageSection.triageTestingAsymptomatic = true
            } else if (section === 'travel-asymptomatic') {
                console.log($scope.endResult)
                if ($scope.form.triageUser.testInfo.result === 'negative') {
                    $scope.selfTriageSection.triageTravelAsymptomatic = true
                } else {
                    if ($scope.endResult === 'positive') {
                        $window.document.title = $scope.resultTitle.confirmed
                        $scope.selfTriageResultSection.triageResultConfirmed = true
                    } else if ($scope.endResult === 'inconclusive') {
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'have-not-received-yet') {
                        $window.document.title = $scope.resultTitle.suspect
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'probable') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultProbable = true
                    } else {
                        $scope.selfTriageSection.triageTravelAsymptomatic = true
                    }
                }
            } else if (section === 'exposure-asymptomatic') {
                if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                    crossReferenceLocations(false, 'asymptomatic')
                } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                    $scope.selfTriageSection.triageExposureAsymptomatic = true
                }
            } else if (section === 'final-asymptomatic') {
                console.log($scope.endResult)
                if ($scope.form.triageUser.recentlyTraveled === 'no') {
                    if ($scope.endResult === 'allright') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.allRight
                        $scope.selfTriageResultSection.triageResultAllright = true
                    } else if ($scope.endResult === 'pum') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    }
                } else if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                    if ($scope.endResult === 'pum') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'allright') {
                        $window.document.title = $scope.resultTitle.allRight
                        $scope.selfTriageResultSection.triageResultAllright = true
                    }
                }
            }
        } else if ($scope.form.triageUser.track === 'symptomatic') {
            if (section === 'testing-symptomatic') {
                $scope.selfTriageSection.triageTestingSymptomatic = true
            } else if (section === 'travel-symptomatic') {
                console.log($scope.endResult)
                if ($scope.form.triageUser.testInfo.result === 'negative') {
                    $scope.selfTriageSection.triageTravelSymptomatic = true
                } else {
                    if ($scope.endResult === 'positive') {
                        $window.document.title = $scope.resultTitle.confirmed
                        $scope.selfTriageResultSection.triageResultConfirmed = true
                    } else if ($scope.endResult === 'inconclusive') {
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'have-not-received-yet') {
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultPUM = true
                    } else if ($scope.endResult === 'probable') {
                        console.log("$scope.goToNextSection -> $scope.endResult", $scope.endResult)
                        $window.document.title = $scope.resultTitle.probable
                        $scope.selfTriageResultSection.triageResultProbable = true
                    } else {
                        $scope.selfTriageSection.triageTravelSymptomatic = true
                    }
                }
            } else if (section === 'exposure-symptomatic') {
                if ($scope.form.triageUser.recentlyTraveled === 'yes') {
                    crossReferenceLocations(true, 'symptomatic')
                } else if ($scope.form.triageUser.recentlyTraveled === 'no') {
                    $scope.selfTriageSection.triageExposureSymptomatic = true
                }
            } else if (section === 'direct-exposure-history') {
                if ($scope.customValues.directExposureHistory) {
                    console.log('Selected at least one')
                    console.log($scope.form.triageUser)
                    if (
                        $scope.form.triageUser.ppe14Days === 'yes'
                        || $scope.form.triageUser.environment14Days === 'yes'
                        || $scope.form.triageUser.symptomsStartWithin14DaysBeingExposed === 'yes'
                    ) {
                        // Symptom start within 14 days of exposure
                        $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true
                        $scope.customValues.additionalRoute = 'option-three'
                    } else {
                        $scope.selfTriageSection.triageILISymptomatic = true
                    }
                    console.log("$scope.goToNextSection ->   $scope.customValues.additionalRoute", $scope.customValues.additionalRoute)
                } else {
                    console.log('No to all questions')
                    $scope.selfTriageSection.triageILISymptomatic = true
                }
            } else if (section === 'ili-exposure-history') {
                console.log("$scope.goToNextSection -> $scope.customValues.additionalRoute", $scope.customValues.additionalRoute)
                if ($scope.customValues.additionalRoute === 'option-three') {
                    $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true
                    $scope.customValues.additionalRoute2 = 'option-three-a'
                } else {
                    if (!$scope.form.triageUser.symptom.fever && !$scope.form.triageUser.symptom.cough && !$scope.form.triageUser.symptom.troubleBreathing) {
                        console.log("$scope.goToNextSection -> $scope.form.triageUser.symptom", $scope.form.triageUser.symptom)
                        console.log('No fever, cough and troubleBreathing')
                        $window.document.title = $scope.resultTitle.notCovid
                        $scope.selfTriageResultSection.triageResultNotcovid = true;
                        console.log("$scope.goToNextSection -> $scope.selfTriageResultSection", $scope.selfTriageResultSection)
                    } else if ($scope.form.triageUser.symptom.fever || $scope.form.triageUser.symptom.cough || $scope.form.triageUser.symptom.troubleBreathing) {
                        console.log('Have fever or cough or troubleBreathing')
                        $scope.selfTriageSection.triageComorbiditySymptomatic = true;
                    }
                }
            } else if (section === 'comorbidity-symptomatic') {
                console.log($scope.customValues.additionalRoute)
                if ($scope.customValues.additionalRoute === 'option-one') {
                    // Save Diseases first
                    $window.document.title = $scope.resultTitle.suspect
                    $scope.selfTriageResultSection.triageResultSuspectA = true;
                } else if ($scope.customValues.additionalRoute === 'option-two') {
                    if ($scope.endResult === "SuspectB") {
                        // Save Diseases first
                        $window.document.title = $scope.resultTitle.suspect
                        $scope.selfTriageResultSection.triageResultSuspectB = true;
                    }
                    if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no') {
                        var over59 = $scope.customValues.age > 59 ? true : false
                        var isPregnant = $scope.form.triageUser.pregnant === 'yes' ? true : false
                        var isHealthCareWorker = $scope.form.triageUser.healthCareWorker === 'yes' ? true : false

                        console.log("$scope.goToNextSection -> over59, isPregnant, isHealthCareWorker", over59, isPregnant, isHealthCareWorker)
                        if (over59 || isPregnant || isHealthCareWorker) {
                            $window.document.title = $scope.resultTitle.suspect
                            $scope.selfTriageResultSection.triageResultSuspectB = true;
                        } else {
                            $window.document.title = $scope.resultTitle.suspect
                            $scope.selfTriageResultSection.triageResultNotcovid = true;
                        }
                        console.log("$scope.goToNextSection -> $scope.selfTriageResultSection", $scope.selfTriageResultSection)
                    }
                } else {
                    if ($scope.endResult === "SuspectB") {
                        // Save Diseases first
                        $window.document.title = $scope.resultTitle.suspect
                        $scope.selfTriageResultSection.triageResultSuspectB = true;
                    }
                    if ($scope.form.triageUser.otherSeriousIllnessesOrConditions === 'no') {
                        var over59 = $scope.customValues.age > 59 ? true : false
                        var isPregnant = $scope.form.triageUser.pregnant === 'yes' ? true : false
                        var isHealthCareWorker = $scope.form.triageUser.healthCareWorker === 'yes' ? true : false
                        if (over59 || isPregnant || isHealthCareWorker) {
                            $window.document.title = $scope.resultTitle.suspect
                            $scope.selfTriageResultSection.triageResultSuspectB = true;
                        } else {
                            $window.document.title = $scope.resultTitle.notCovid
                            $scope.selfTriageResultSection.triageResultNotcovid = true;
                        }
                    }
                }
            } else if (section === 'symptoms-checklist') {
                console.log($scope.form)
                if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'yes') {
                    $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true
                } else if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'no') {
                    $scope.selfTriageSection.triageExposureSymptomatic = true
                }
            } else if (section === 'symptoms-checklist-symptomatic') {
                if (
                    $scope.form.triageUser.symptomsChecklist.fever === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.sputumProduction === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.shortnessOfBreath === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.nasalCongestion === 'yes'
                ) {
                    $scope.selfTriageSection.triageComorbiditySymptomatic = true;
                    $scope.customValues.additionalRoute = 'option-one'
                } else if (
                    $scope.form.triageUser.symptomsChecklist.fever === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.dryCough === 'yes'
                    || $scope.form.triageUser.symptomsChecklist.difficultyBreathing === 'yes'
                ) {
                    $scope.customValues.additionalRoute = 'option-two'
                    $scope.selfTriageSection.triageComorbiditySymptomatic = true
                } else {
                    $window.document.title = $scope.resultTitle.notCovid
                    $scope.selfTriageResultSection.triageResultNotcovid = true;
                }
            }
        }
        console.log(section)
    }

    function crossReferenceLocations(value, track) {
        // Do crossreferencehere - if covidLocationsCode === triageUser.countriesVisitedCountryCode ? true : false
        // var promise;
        // promise.then(function () {}).catch(function (error) {})
        $scope.customValues.matchCountrySelected = value
        if (track === 'asymptomatic') {
            if ($scope.customValues.matchCountrySelected === true) {
                $scope.endResult = 'pum'
                $scope.goToNextSection('final-asymptomatic')
                console.log("crossReferenceLocations -> $scope.customValues.matchCountrySelected", $scope.customValues.matchCountrySelected)
            } else {
                $scope.selfTriageSection.triageExposureAsymptomatic = true
            }
        } else if (track === 'symptomatic') {
            console.log("crossReferenceLocations -> track", track)
            if ($scope.customValues.matchCountrySelected === true) {
                saveSymptoms()
                console.log("crossReferenceLocations -> $scope.customValues.matchCountrySelected", $scope.customValues.matchCountrySelected)
            } else {
                $scope.selfTriageSection.triageExposureSymptomatic = true
            }
        }
    }

    function saveSymptoms() {
        if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'yes') {
            // SaveSymptoms in the DB
            // var promise;
            // promise.then(function () {}).catch(function (error) {})
            $scope.goToNextSection('symptoms-checklist')
        } else if ($scope.form.triageUser.symptomStartsWithin14DaysBeingInCountry === 'no') {
            $scope.goToNextSection('symptoms-checklist')
        }
    }

    function saveDiseases() {
        // TODO Save saveDiseases to the database
    }

    $scope.goBack = function (section) {
        console.log($scope.selfTriageSection)
        if ($scope.selfTriageSection.triageComorbiditySymptomatic && $scope.customValues.additionalRoute === 'option-one') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true;
        } else if ($scope.selfTriageSection.triageComorbiditySymptomatic && $scope.customValues.additionalRoute === 'option-one') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageSymptomsChecklistSymptomatic = true;
        } else if ($scope.selfTriageSection.triageSymptomsChecklistSymptomatic && $scope.customValues.additionalRoute === 'option-three') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageExposureSymptomatic = true;
        } else if ($scope.selfTriageSection.triageExposureSymptomatic && $scope.customValues.additionalRoute === 'option-three' && $scope.customValues.additionalRoute2 === 'option-three-a') {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection.triageILISymptomatic = true;
        } else {
            for (var t in $scope.selfTriageSection) {
                if ($scope.selfTriageSection[t]) {
                    $scope.selfTriageSection[t] = false
                }
            }
            $scope.selfTriageSection[section] = true
        }
        console.log($scope.selfTriageSection)
        $anchorScroll("mainContent");
    }

    $scope.formChange = function (form) {
        if (form === 'birthDate') {
            $scope.showField.ageResponse = $scope.form.triageUser.birthDate.month !== '' && $scope.form.triageUser.birthDate.day !== ''
                && $scope.form.triageUser.birthDate.year.length === 4 ? true : false
            var monthShort = '';
            for (var date in $scope.months) {
                if ($scope.form.triageUser.birthDate.month === $scope.months[date].fullMonth) {
                    monthShort = $scope.months[date].shortMonth;
                    break;
                }
            }
            var triageUserDateOfBirthString = `${monthShort}/${$scope.form.triageUser.birthDate.day}/${$scope.form.triageUser.birthDate.year}`;
            console.log("$scope.formChange -> triageUserDateOfBirthString", triageUserDateOfBirthString)
            var now = new Date();
            var yearNow = now.getYear();
            var monthNow = now.getMonth();
            var dateNow = now.getDate();

            var triageUserDOB = new Date(triageUserDateOfBirthString.substring(6, 10), triageUserDateOfBirthString.substring(0, 2) - 1, triageUserDateOfBirthString.substring(3, 5));
            if (triageUserDOB.getMonth && typeof triageUserDOB.getMonth === "function") {
                $scope.form.triageUser.birthDate.fullDate = triageUserDOB
            }
            console.log("$scope.formChange -> $scope.form.triageUser.birthDate", $scope.form.triageUser.birthDate)
            console.log("$scope.formChange -> triageUserDOB", triageUserDOB)
            var monthTriageUserDOB = triageUserDOB.getMonth();
            var yearTriageUserDOB = triageUserDOB.getYear();
            var dateTriageUserDOB = triageUserDOB.getDate();

            var userTotalYearAge = yearNow - yearTriageUserDOB;

            if (monthNow >= monthTriageUserDOB) {
                var monthAge = monthNow - monthTriageUserDOB;
            } else {
                userTotalYearAge--;
                var monthAge = 12 + monthNow - monthTriageUserDOB;

            }
            if (dateNow >= dateTriageUserDOB) {
                var dateAge = dateNow - dateTriageUserDOB;
            } else {
                monthAge--;
                if (monthAge < 0) {
                    monthAge = 11;
                    userTotalYearAge--;
                }
            }
            $scope.customValues.months = monthAge
            $scope.customValues.age = userTotalYearAge
            if ($scope.showField.ageResponse) {
                if ($scope.customValues.age < 0 || $scope.customValues.age > 130) {
                    Swal.fire('Warning!', `Please input a proper birth year. You can not be ${$scope.customValues.age} years old`, 'warning');
                    $scope.showField.ageResponse = false;
                    $scope.customValues.age = 0;
                    $scope.form.triageUser.birthDate.year = ''
                }
            }
        } else if (form === 'address') {
            $scope.showField.addressResponse = $scope.form.triageUser.address.region !== '' && $scope.form.triageUser.address.city !== ''
                && $scope.form.triageUser.address.barangay !== '' ? true : false
            $scope.customValues.address = `${$scope.form.triageUser.address.barangay}, ${$scope.form.triageUser.address.city}`;
        }
    }

    $scope.searchCountries = function () {
        if ($scope.countries.length > 0) {
            var searchCountryFilter = alasql(`SELECT * from ? WHERE name != 'Philippines' AND name LIKE '%${$scope.selector.countrySelector}%'`, [$scope.countries])
            $scope.countries = searchCountryFilter
        }
        if ($scope.selector.countrySelector === '') {
            getCountries();
        }
    }

    $scope.addCountry = function (countryCode, country, method) {
        if (countryCode === null && country === null && method === 'addOne') {
            if ($scope.form.triageUser.countriesVisitedCountryCode.length !== 25 && $scope.visitedCountries.length !== 25) {
                if ($scope.countries.length === 1) {
                    var country = $scope.countries;
                    $scope.form.triageUser.countriesVisitedCountryCode.push(country[0].alpha3Code)
                    $scope.visitedCountries.push(country[0].name)
                } else {
                    Swal.fire('Warning!', "You cannot add this location", 'warning');
                }
            } else {
                Swal.fire('Warning!', 'Maximum of 25 countries.', 'warning');
            }
        } else {
            if ($scope.form.triageUser.countriesVisitedCountryCode.length !== 25 && $scope.visitedCountries.length !== 25) {
                $scope.form.triageUser.countriesVisitedCountryCode.push(countryCode)
                $scope.visitedCountries.push(country)

                if ($scope.form.triageUser.countriesVisitedCountryCode.length > 0) {
                    var countryCodes = $scope.form.triageUser.countriesVisitedCountryCode.filter(function (elem, pos) {
                        return $scope.form.triageUser.countriesVisitedCountryCode.indexOf(elem) == pos;
                    });
                    $scope.form.triageUser.countriesVisitedCountryCode = countryCodes
                    console.log("$scope.addCountry -> countryCodes", countryCodes)
                }
                if ($scope.visitedCountries.length > 0) {
                    var countries = $scope.visitedCountries.filter(function (elem, pos) {
                        return $scope.visitedCountries.indexOf(elem) == pos;
                    });
                    $scope.visitedCountries = countries
                    console.log("$scope.addCountry -> countries", countries)
                }
            } else {
                Swal.fire('Warning!', 'Maximum of 25 countries.', 'warning');
            }
        }
    }

    $scope.addDisease = function (disease, method) {
        console.log("$scope.addDisease -> disease, method", disease, method)
        if (disease === null && method === 'entered') {
            if ($scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length !== 10 && $scope.comorbidList.length !== 10) {
                $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.push($scope.selector.diseasesSelector)
                $scope.comorbidList.push($scope.selector.diseasesSelector)
            } else {
                Swal.fire('Warning!', 'Maximum of 10 diseases.', 'warning');
            }
        } else {
            if ($scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length !== 10 && $scope.comorbidList.length !== 10) {
                $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.push(disease)
                $scope.comorbidList.push(disease)

                if ($scope.form.triageUser.otherSeriousIllnessesOrConditionsList.length > 0) {
                    var otherSeriousIllnessesOrConditionsList = $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.filter(function (elem, pos) {
                        return $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.indexOf(elem) == pos;
                    });
                    $scope.form.triageUser.otherSeriousIllnessesOrConditionsList = otherSeriousIllnessesOrConditionsList
                    console.log("$scope.addCountry -> otherSeriousIllnessesOrConditionsList", otherSeriousIllnessesOrConditionsList)
                }
                if ($scope.comorbidList.length > 0) {
                    var diseases = $scope.comorbidList.filter(function (elem, pos) {
                        return $scope.comorbidList.indexOf(elem) == pos;
                    });
                    $scope.comorbidList = diseases
                    console.log("$scope.addCountry -> diseases", diseases)
                }
            } else {
                Swal.fire('Warning!', 'Maximum of 10 diseases.', 'warning');
            }
        }
    }

    $scope.removeCountry = function (countryIndex) {
        $scope.form.triageUser.countriesVisitedCountryCode.splice(countryIndex, 1)
        $scope.visitedCountries.splice(countryIndex, 1)
        console.log("$scope.removeCountry -> countryIndex", countryIndex)
    }

    $scope.removeComorbid = function (comorbidIndex) {
        $scope.form.triageUser.otherSeriousIllnessesOrConditionsList.splice(comorbidIndex, 1)
        $scope.comorbidList.splice(comorbidIndex, 1)
        console.log("$scope.removeCountry -> comorbidIndex", comorbidIndex)
    }

    $scope.showTermsAndDataPrivacy = function () {
        ngDialog.openConfirm({
            template: 'ShowTermsAndDataPrivacyDialog',
            className: 'ngdialog-theme-plain',
            scope: $scope,
            showClose: true,
            closeByEscape: false,
            closeByNavigation: false,
            closeByDocument: false
        });
    }

    $scope.collectData = function (method) {
        if (method === 'agree') {
            console.log($scope.form)
            Swal.fire({
                title: 'Success',
                text: 'Your data has been saved! Thank you for your cooperation.',
                icon: 'success'
            });
            $scope.showViolator = false;
        } else if (method === 'disagree') {
            console.log($scope.form)
            $scope.showViolator = false;
        }
    }

}])