<template>
  <StackLayout>
    <FlexboxLayout
      justifyContent="space-around"
      alignItems="flex-end"
      class="border"
    >
      <StackLayout width="100%">
        <Button height="150" />
      </StackLayout>
      <StackLayout width="100%">
        <Button height="100" />
      </StackLayout>
      <StackLayout width="100%">
        <Button />
      </StackLayout>
    </FlexboxLayout>

    <FlexboxLayout
      flexDirection="column"
      justifyContent="space-around"
      alignItems="flex-end"
      class="border"
    >
      <StackLayout>
        <Button width="150" />
      </StackLayout>
      <StackLayout>
        <Button width="100" />
      </StackLayout>
      <StackLayout>
        <Button />
      </StackLayout>
    </FlexboxLayout>

  </StackLayout>
</template>

<script>
export default {
};
</script>

<style>
.tall {
  height: 10;
}
</style>
