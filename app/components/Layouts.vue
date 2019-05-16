<template>
  <StackLayout>
    <FlexBoxLayout
      class="flex-box-layout border"
    >
      <StackLayout width="33%">
        <Button text="1" />
      </StackLayout>
      <StackLayout width="33%">
        <Button text="1" />
      </StackLayout>
      <StackLayout width="33%">
        <Button text="1" />
      </StackLayout>
    </FlexBoxLayout>

    <FlexBoxLayout
      class="flex-box-layout border"
    >
      <StackLayout width="66%">
        <Button text="2" />
      </StackLayout>
      <StackLayout width="33%">
        <Button text="1" />
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
        <Button text="2" />
      </StackLayout>
      <StackLayout
        row="0"
        col="1"
      >
        <Button text="1" />
      </StackLayout>
    </GridLayout>

    <FlexBoxLayout
      class="flex-box-layout border"
    >
      <StackLayout width="25%">
        <Button text="3" />
      </StackLayout>
      <StackLayout width="33%">
        <Button text="4" />
      </StackLayout>
      <StackLayout width="42%">
        <Button text="5" />
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
        <Button text="3" />
      </StackLayout>
      <StackLayout
        row="0"
        col="1"
      >
        <Button text="4" />
      </StackLayout>
      <StackLayout
        row="0"
        col="2"
      >
        <Button text="5" />
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

.flex-box-layout {
  justify-content: space-around;
}
</style>
