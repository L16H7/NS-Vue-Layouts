<template>
  <StackLayout>
    <WrapLayout
      class="border"
    >
      <StackLayout
        v-for="i in 9"
        :key="i"
        width="32%"
      >
        <Button :text="i" />
      </StackLayout>
    </WrapLayout>

    <GridLayout
      rows="*,*,*"
      columns="*,*,*"
      class="border"
    >
      <StackLayout
        v-for="i in 9"
        :key="i"
        :row="(i - 1) / 3"
        :col="((i - 1) % 3)"
      >
        <Button :text="i" />
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>

<script>
export default {
};
</script>
