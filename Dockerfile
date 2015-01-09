FROM dockerfile/nodejs-bower-gulp

RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby sqlite3 sqlitebrowser
RUN gem install sass

RUN mkdir /myapp

RUN npm install -g yo generator-gulp-angular generator-angular

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /myapp && cp -a /tmp/node_modules /opt/myapp
 
# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /myapp
ADD . /myapp
  
RUN npm install
RUN bower install --allow-root

ENTRYPOINT npm
