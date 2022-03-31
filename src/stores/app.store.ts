import {makeAutoObservable} from "mobx";

class AppStore{

    counter:number = 0

    constructor(){
        makeAutoObservable(this)
    }

    setCounter(value:number){
        this.counter = value
    }
}

export default new AppStore()