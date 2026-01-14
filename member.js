function skillmember() {
    return {
        restrict: 'E',
        scope: {
            member: '=',
            onDelete: '&',
            onEdit: '&'
        },
        templateUrl: 'templates/skillmember.html',
        controller: 'SkillMemberController'
    };
}

module.exports = skillmember;          