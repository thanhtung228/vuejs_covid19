export default {
  methods: {
    async setLoading(isLoading) {
      await this.$store.dispatch(
        "App/setLoading",
        { loading: isLoading },
        {
          root: true,
        }
      );
    }
  }
}