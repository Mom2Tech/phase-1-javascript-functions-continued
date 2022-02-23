function saturdayFun  (skate = 'roller-skate') {
    return (`This Saturday, I want to ${skate}!`);
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(office = 'go to the office') {
    return (`This Monday, I will ${office}.`)
}
mondayWork();
mondayWork('work from home');

function wrapAdjective (flair ="*"){
    return function(adj = 'special') {
        return (`You are ${flair}${adj}${flair}!`)
    }
}