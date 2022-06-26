import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {COLORS, QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>

          {SPORTS_STORIES.map((data) => (
              <SportStoryWrapper key={data.id}>
                 <MiniStory {...data} />
              </SportStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  
  
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(0px, auto);
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0px, 1fr);
  }
`;

const MarketsSection = styled.section`
    border-right: 1px solid var(--color-gray-300);
    padding-right: 24px;
    margin-right: 24px;
    `;

const MarketCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
`;

const SportsSection = styled.section`
  overflow: hidden;
`;

const SportStoryWrapper  = styled.div`
  min-width: 220px
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 16px;
  
  @media ${QUERIES.tabletAndUp} {
  display: flex;
  flex: 1 0 220px;
  flex-wrap: nowrap;
  overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
