export class Notification {

    constructor(public id: any, public description: String, public timeLimit: Number = 0, private shown: Boolean = true) {
        if (this.shown) {
            this.show();
        }
    }

    show(): void {
        this.shown = true;
        if (this.timeLimit) {
            setTimeout(() => {
                debugger;
                this.hide();
            }, this.timeLimit);
        }
    }

    hide(): void {
        this.shown = false;
    }

}
