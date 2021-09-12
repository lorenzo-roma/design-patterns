import StoryTeller from "./StoryTeller";


export default class HappyStoryTeller extends StoryTeller {

    getStoryOpening(): string {
        return "I was in a small town in Utah, and I was talking to a woman who had a small business and a large family. She was a Mormon and she had a lot of children. She was very happy and I was very happy for her.";
    }
    getStoryBody(): string {
        return "She asked me how she could make her children happy. I told her the secret to raising happy children is to make them happy. The woman said “I do. I make my children happy.” I asked her what she meant and she told me that she did everything for her children. She said “I make their clothes; I make their meals; I make their beds; I make their lives happy.” I asked her if her children knew how to make clothes; if her children knew how to make meals; if her children knew how to make beds; if her children knew how to make their own lives happy. She said “no.” I told her that I think it is very important for her children to know how to make their own lives happy. I said that it is important for them to know that they can make their own beds, they can make their own meals, they can make their own clothes, they can make their own lives happy. She said “I know. I know. I will tell my children how to make their own lives happy.”";
    }
    getStoryEnding(): string {
        return "And I said “You should also tell them that they should not expect other people to make their lives happy. That is something we must do for ourselves.”";
    }
}