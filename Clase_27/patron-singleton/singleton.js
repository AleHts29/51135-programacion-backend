let instance = null;


class SingletonClass {
    constructor() {
        this.value = Math.random(100);
    }


    static getIntance() {
        if (!instance) {
            instance = new SingletonClass();
        }
        return instance;
    }
}


module.exports = SingletonClass;

