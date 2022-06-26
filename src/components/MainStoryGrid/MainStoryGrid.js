import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {COLORS, QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (

    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
              <VerticalStoryWrapper key={story.id}>
            <SecondaryStory {...story} />
              </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
              <OpinionVerticalStoryWrapper key={story.id}>
            <OpinionStory {...story} />
              </OpinionVerticalStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
   
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'main-story secondary-stories'
    'opinion-stories opinion-stories'
    'advertisement advertisement';
    
    gap: 1px; // for dividers
    background-color: ${COLORS.gray[300]};
  }
  
  @media ${QUERIES.laptopAndUp} {
  grid-template-columns: 4fr 3fr 2fr;
  grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media ${QUERIES.tabletAndUp} {
    padding-right: 15px;
    background-color: ${COLORS.gray[100]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  
  @media ${QUERIES.tabletAndUp} {
    padding-left: 15px;
    background-color: ${COLORS.gray[100]};
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-right: 15px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;
const OpinionStoryList = styled(StoryList)`
  
  @media ${QUERIES.tabletOnly} {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: -1px;
    padding-top: 17px;
    background-color: ${COLORS.gray[100]};
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-left: 15px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  
   @media ${QUERIES.tabletAndUp} {
    margin-top: -1px;
    padding-top: 17px;
    background-color: ${COLORS.gray[100]};
  }
   @media ${QUERIES.laptopAndUp} {
    padding-left: 15px;
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

const OpinionVerticalStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
   &:not(:last-of-type) {
    border-bottom:revert;
    padding-bottom:revert;
    margin-bottom:revert;
  }
  }
`;


export default MainStoryGrid;
