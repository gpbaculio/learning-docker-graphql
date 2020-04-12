import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`

const Root = () => ( 
  <Wrapper>
    <Container>
      <Content>ContentContent</Content>
      <Sidebar>SidebarSidebar</Sidebar>
    </Container>
  </Wrapper>
)

export default Root