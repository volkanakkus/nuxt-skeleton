<template>
  <div>
    <SkeletonWrap animated rounded>
      <SkeletonBlock repeat="4">
        <Skeleton height="200px" />
        <SkeletonWrap>
          <Skeleton height="75px" width="75px" circle />
          <Skeleton height="25px" repeat="2" />
        </SkeletonWrap>
      </SkeletonBlock>
    </SkeletonWrap>

    <SkeletonDiv top="50px" animated rounded repeat="3">
      <Skeleton repeat="4" />
      <Skeleton repeat="4" top="10px" width="50%" />
    </SkeletonDiv>
  </div>
</template>
