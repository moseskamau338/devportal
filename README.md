# Churpy Developer Portal

- To install, run:
>docker build -t churpy:devportal .

- Then run the container:
> docker run --name DevPortal -p 3435:3435 -v $PWD:/app -v /app/node_modules churpy:devportal