angular.module('myApp.issuers')
.filter('roleList',function(){
    return function(issuer,roleIdList)
    {        
        console.log(issuer);
        console.log(roleIdList);
        var rz = jQuery.extend(true, {}, issuer)
        //var rz = issuer;
        if(roleIdList!=null)
        {
            var roleList = [];
            var subjectRole;
            rz.roleList=roleList;            
            for(id in roleIdList)
            {
                subjectRole['id'] = id;
                if(rz!=null)
                {
                    rz.roleList.push(subjectRole);
                }
            }
        }
        return rz;
    }
}).directive('issuerForm', function(){
    return{
        restrict: 'E',
        templateUrl: 'issuers/issuer.html',
        controller:   ['$scope','$http','$base64', function($scope,$http,$base64) {
                
            this.issuer = null;
            this.groups = null;
            var subjectRole; // = null;
                
            var credentials = 'Administrator:123';
            console.log(credentials);
            var encoded = $base64.encode(credentials);  
            console.log(encoded);
            
            this.postIssuer = function()
            {                
//                for(e in this.groups)
//                {
//                    console.log(e); 
//                    subjectRole.id=e;
//                    this.issuer.roleList.push(e);
//                }
                console.log(JSON.stringify(this.issuer)); 
                $http.defaults.headers.common['Authorization'] = 'Basic '+encoded;
                $http.post('http://env-5542790.jelastic.regruhosting.ru/loyalty/api/v1/subject/issuer',this.issuer)
                .success(
                    function() {
                        console.log("successfully posted");
                    })
                .error(
                    function() {
                        console.log("posting error");
                    });
            };                       
        }],
        controllerAs: 'postCtrl'    
    };
})
;                         


