FROM alpine:latest AS builder

RUN apk add --update hugo

WORKDIR /src

COPY . .

RUN hugo -gc --minify

FROM caddy:alpine

COPY --from=builder /src/public
