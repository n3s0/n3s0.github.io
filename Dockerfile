FROM hugomods/hugo:alpine AS build
WORKDIR /src
COPY ./ .
RUN hugo --baseURL "/"

FROM hugomods/hugo:nginx
COPY --from=build /src/public /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
