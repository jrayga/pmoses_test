app.controller("Resources", function (
    $scope,
    $location
) {
    $scope.activeNav = $location.url()

    init()

    function init() {
        if ($scope.activeNav === '/resources/faqs') {
            faqsPage();
        }
    }

    function faqsPage() {
        var faqAccordion = document.getElementsByClassName("question-container");
        if (faqAccordion.length > 0) {
            for (var i = 0; i < faqAccordion.length; i++) {
                faqAccordion[i].onclick = function () {
                    if (this.classList.contains('question-open')) {
                        this.classList.remove("question-open");
                        var panel = this.nextElementSibling;
                        panel.style.maxHeight = null;
                    } else {
                        this.classList.add("question-open");
                        var panel = this.nextElementSibling;
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                    }
                }
            }
        };
    }

})