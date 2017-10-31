export class Notification {

    private shown: Boolean = false;
    constructor(public id: any, public description: String, public timeLimit: Number = 0, show: Boolean = true) {
        if (show) {
            setTimeout(() => {
                this.show();
            }, 1);
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
