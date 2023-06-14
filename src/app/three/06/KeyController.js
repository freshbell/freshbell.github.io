class KeyController {
    constructor() {
        // 생성자
        this.keys = [];

        window.addEventListener('keydown', e => {
            console.log(e.code + ' key down');
            this.keys[e.code] = true;
        });

        window.addEventListener('keyup', e => {
            console.log(e.code + ' key up')
            delete this.keys[e.code];
        });
    }
}

export default KeyController;