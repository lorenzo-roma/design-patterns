import StoryTeller from "./StoryTeller";

export default class AngryStoryTeller extends StoryTeller {

    getStoryOpening(): string {
        return "I was at the game in Atlanta in 1991, when Tony Zendejas missed a game-winning field goal with less than two minutes left in the game. We went to the locker room right away, but when we got in there, Tony was sitting in the back with his head in his hands.";
    }
    getStoryBody(): string {
        return "We did our best to console him. Bryan Cox was the first one to go over to him. All the guys came over. We just told Tony that it was just one kick, that he still had a job in the league, that he was one of the best kickers, and that we loved him. We all gave him a hug.";
    }
    getStoryEnding(): string {
        return "When we were all leaving to go to the buses, Tony said he wanted to stay behind for a few minutes, so we all went ahead and left him.";
    }
}