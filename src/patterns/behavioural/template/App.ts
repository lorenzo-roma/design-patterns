import AngryStoryTeller from "./AngryStoryTeller";
import BadStoryTeller from "./BadStoryTeller";
import HappyStoryTeller from "./HappyStoryTeller";
import PrinterService from "./PrinterService";
import StoryTeller from "./StoryTeller";

const printService = new PrinterService();

const happyStoryTeller: StoryTeller = new HappyStoryTeller(printService);
const angryStoryTeller: StoryTeller = new AngryStoryTeller(printService);
const badStoryTeller: StoryTeller = new BadStoryTeller(printService);

happyStoryTeller.tellStory();
angryStoryTeller.tellStory();
badStoryTeller.tellStory();

