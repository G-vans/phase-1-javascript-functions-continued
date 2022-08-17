// code your solution here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`

}
console.log(saturdayFun("bathe my dog"));
console.log(saturdayFun());

//Variable Expression
const  mondayWork = function(activityMonday="go to the office") {
    return `This Monday, I will ${activityMonday}.`

}
mondayWork();


function wrapAdjective(wrapper="*") {

    return function (adjective="a hard worker") {
        return `You are ${wrapper}${adjective}${wrapper}!`

    }
}
wrapAdjective();
