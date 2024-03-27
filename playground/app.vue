<template>
  <div>
    <SWrap animated rounded repeat="3">
      <SBlock repeat="4">
        <S height="200px" />
        <SWrap>
          <S height="75px" width="75px" circle />
          <S height="25px" repeat="2" />
        </SWrap>
      </SBlock>
    </SWrap>

    <SDiv top="50px" animated rounded repeat="3">
      <S repeat="4" />
      <S repeat="4" top="10px" width="50%" />
    </SDiv>
  </div>
</template>
