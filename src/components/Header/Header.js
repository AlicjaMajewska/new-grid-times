import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24}/>
                        </button>
                        <button>
                            <Menu size={24}/>
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24}/>
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <ActionGroupForDesktopAndUp>
                    <button>
                        <Search size={24}/>
                    </button>
                    <button>
                        <Menu size={24}/>
                    </button>
                </ActionGroupForDesktopAndUp>
                <Logo/>

                <SubscribeActionGroupForDesktopAndUp>
                    <SubscribeButton>
                        Subscribe
                    </SubscribeButton>
                    <AlreadySubscribedLink href="/">
                        Already a subscriber?
                    </AlreadySubscribedLink>
                </SubscribeActionGroupForDesktopAndUp>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: ${COLORS.white};
  
   @media ${QUERIES.laptopAndUp} {
      display: none;
   }
  
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupForDesktopAndUp = styled(ActionGroup)`
    display: none;

    @media ${QUERIES.laptopAndUp} { 
        display: flex;
    }
`
const SubscribeActionGroupForDesktopAndUp = styled.div`
    display: none;
    position: relative;

    @media ${QUERIES.laptopAndUp} { 
      display: revert;
      justify-self: end;
    }
`


const AlreadySubscribedLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: underline;
  font-size: ${14 / 16}rem;
  position: absolute;
  padding-top: 8px;
  width: 100%;
  text-align: center;
`;

const SubscribeButton = styled.button`
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    border-radius: 5px;
    text-transform: uppercase;
    padding: 12px 24px;
    font-weight: ${WEIGHTS.bold};
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;


const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
  margin-top: 48px;
  margin-bottom: 72px;
  }
  
   @media ${QUERIES.laptopAndUp} {
      display: grid;
      align-items: center;
      align-content: center;
      justify-content: revert;
      grid-template-columns: 1fr auto 1fr;
  
  margin-top: 16px;
  margin-bottom: 72px;
  }
`;


export default Header;
