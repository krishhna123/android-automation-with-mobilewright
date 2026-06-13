FROM ubuntu:24.04

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    unzip \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sSfL -o /tmp/platform-tools.zip \
    https://dl.google.com/android/repository/platform-tools-latest-linux.zip \
    && unzip /tmp/platform-tools.zip -d /opt/android-sdk \
    && rm /tmp/platform-tools.zip

ENV ANDROID_HOME=/opt/android-sdk
ENV ANDROID_ADB_SERVER_ADDRESS=host.docker.internal
ENV PATH="${ANDROID_HOME}/platform-tools:${PATH}"

WORKDIR /home/mwuser

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
