import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  test:{
    global:true,
    environment:"jsdom"
  }
};
