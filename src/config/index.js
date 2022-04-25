/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "pord";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi: "https://www.fastmock.site/mock/11088120c411edac053c37ab6ad03c28/api",
  },
  test: {
    baseApi: "//test.futurefe.com/api",
    mockApi: "https://www.fastmock.site/mock/11088120c411edac053c37ab6ad03c28/api",
  },
  prod: {
    baseApi: "//futurefe.com/api",
    mockApi: "",
  },
};

export default {
  env,
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env],
};
