import StoryTeller from "./StoryTeller";


export default class BadStoryTeller extends StoryTeller {

    getStoryOpening(): string {
        return "There is no sense of time and place, and the end is a joke. Is the storyteller a student who is frustrated by the teacher's questions? Is he a teacher trying to give a lesson to a class of unruly students? Maybe this story is not so bad as it first seems. It is a play on the term 'concise narrative' a form defined as a narrative that is short and to the point."
    }
    getStoryBody(): string {
        return "The storyteller defines a concise narrative as a story containing a conflict, a struggle with a single solution, and a happy ending. But a story can have a happy ending without having a solution to the problem. In the case of the storyteller, the solution is to tell a longer story.";
    }
    getStoryEnding(): string {
        return "In a concise narrative, there is a caller and a narrator. It is difficult to decide who is the narrator and who is the caller, for the storyteller does not clearly define the roles. It might be that the teacher is the caller, and the students are the narrators, but that is not certain.";
    }
}