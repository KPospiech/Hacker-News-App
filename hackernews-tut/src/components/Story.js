import React, {useState, useEffect} from "react";
import {getStory} from "../services/hnApi";
import {StoryMeta, StoryMetaElement, StoryTitle, StroyWrapper} from "../styles/StorySyles";

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <StroyWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>
                    {story.title}
                </a>
            </StoryTitle>
            <StoryMeta>
                <span className="story__by" data-testid="story-by">
                    <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
                </span>
                <span className="story__time" data-testid="story-time">
                    <StoryMetaElement color="#000">Posted:</StoryMetaElement>{` `} {story.time}
                </span>

            </StoryMeta>
        </StroyWrapper>
    ) : null;
};