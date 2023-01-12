# test project to show paths work in service workers

Note, this vite configuration assumes you have a version of kit installed beside it (as in ../kit)

```bash
git clone git@github.com:sellenth/expose-paths-in-service-worker.git
cd expose-paths-in-service-worker
pnpm install
pnpm run dev
```

have browser console open and navigate to `http://localhost:5173/base/service-worker.js'

verify it works
![image of service working printing paths](https://raw.githubusercontent.com/sellenth/expose-paths-in-service-worker/main/screenshot.png)

