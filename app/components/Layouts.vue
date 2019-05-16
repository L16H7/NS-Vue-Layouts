<template>
  <StackLayout>
    <FlexBoxLayout
      class="flex-box-layout border"
    >
      <StackLayout width="33%">
        <Button />
      </StackLayout>
      <StackLayout width="33%">
        <Button />
      </StackLayout>
      <StackLayout width="33%">
        <Button />
      </StackLayout>
    </FlexBoxLayout>

    <FlexBoxLayout
      class="flex-box-layout border"
    >
      <StackLayout width="66%">`
        <Button />
      </StackLayout>
      <StackLayout width="33%">
        <Button />
      </StackLayout>
    </FlexBoxLayout>

    <GridLayout
      columns="2*, *"
      rows="auto"
      class="border"
    >
      <StackLayout
        row="0"
        col="0"
      >
        <Button />
      </StackLayout>
      <StackLayout
        row="0"
        col="1"
      >
        <Button />
      </StackLayout>
    </GridLayout>

    <FlexBoxLayout
      class="flex-box-layout border"
    >
      <StackLayout width="25%">`
        <Button />
      </StackLayout>
      <StackLayout width="33%">
        <Button />
      </StackLayout>
      <StackLayout width="42%">
        <Button />
      </StackLayout>
    </FlexBoxLayout>

    <GridLayout
      columns="3*, 4*, 5*"
      rows="auto"
      class="border"
    >
      <StackLayout
        row="0"
        col="0"
      >
        <Button />
      </StackLayout>
      <StackLayout
        row="0"
        col="1"
      >
        <Button />
      </StackLayout>
      <StackLayout
        row="0"
        col="2"
      >
        <Button />
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>

<script>
export default {
};
</script>

<style>
Button {
  background-color: #00a5ff;
  width: 70;
}
StackLayout {
  border-width: 1;
  border-color: red;
  margin: 1;
}
.border {
  border-width: 1;
  border-color: black;
  margin: 4;
}
.flex-box-layout {
  justify-content: space-around;
}
</style>
