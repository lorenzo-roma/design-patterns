import PrinterService from "./PrinterService";


export default abstract class StoryTeller {

    constructor(
        private printerService: PrinterService
    ) {}

    public tellStory(): void {
        this.printerService.print(this.getWelcomeText());
        this.printerService.print(this.getDisclaimer());
        this.printerService.print(this.getStoryOpening());
        this.printerService.print(this.getStoryBody());
        this.printerService.print(this.getStoryEnding());
    }

    private getWelcomeText(): string {
        return "Welcome, you are about to hear a story!";
    }

    private getDisclaimer(): string {
        return "All these stories has been written by GPT-3."
    }

    protected abstract getStoryOpening(): string;

    protected abstract getStoryBody(): string;

    protected abstract getStoryEnding() : string;

}