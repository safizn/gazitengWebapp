#!/usr/bin/env bash
# ./setup/run.sh <functionName>

development() { # ⭐ Run locally either for development or production like testing.
    export DEPLOYMENT=development
    docker-compose -f ./setup/container/development.dockerCompose.yml up
}

production.stack() { # ⭐ Run Docker swarm services.
    # Create folders in mount volumes:
    docker-machine ssh $VM-1
    VolumeBasePath=/mnt/datadisk-1/gaziteng
    sudo mkdir -p $VolumeBasePath/wordpressUploads
    sudo mkdir -p $VolumeBasePath/app
    sudo mkdir -p $VolumeBasePath/log
    sudo mkdir -p $VolumeBasePath/mysqlDatabase
    sudo mkdir -p $VolumeBasePath/mysqlData
    
    # Deploy stack: (Requires proxy network.)
    docker stack deploy -c ./setup/container/production.dockerStack.yml gazitengwebapp
}

production-like.stack() { # ⭐ Run Docker swarm services.
    # Proxy:
    # redbird 

    # As docker stack schedualer requires absolute paths MSYS_NO_PATHCONV should be on. i.e. disable path conversion for Windows.
    export MSYS_NO_PATHCONV=1
    # And './' volume paths should be replaced with "$PWD/" in order for it to work.
    # Create necessary volume folders if not present:
    mkdir -p ./volume/wordpressUploads
    mkdir -p ./volume/log
    mkdir -p ./volume/app
    mkdir -p ./volume/mysqlDatabase
    mkdir -p ./volume/mysqlData
    # Deploy stack: (Requires proxy network.)
    docker stack deploy -c ./setup/container/deployment.production-like.dockerStack.yml gazitengwebapp
}

# production.service() { # TODO: 
#     # docker service create --name webappDentristApp --network webappDentrist dentristwebapp:latest
#     # docker service create --name webappDentristMysql --network webappDentrist mysql:latest
#     # docker service create --name webappDentristPhpmyadmin --network webappDentrist phpmyadmin:latest
# }

deployment.production-like.container() {
    export COMPOSE_PROJECT_NAME=gaziteng
    export DEPLOYMENT=production
    docker-compose -f ./setup/container/deployment.production-like.dockerCompose.yml up
}

deployment.buildDistribution() { # ⭐
    # development / production
    export DEPLOYMENT=production
    docker-compose -f ./setup/container/deployment.dockerCompose.yml up buildDistributionCode
}

deployment.test() { # ⭐
    docker-compose -f ./setup/container/deployment.dockerCompose.yml up localUnitTest
}

deployment.staging() { # ⭐
    # USAGE: docker-compose -f ./setup/deployment.dockerCompose.yml -f ./setup/development.dockerCompose.yml up --build wordpress localStagingTest
    # USAGE: docker-compose -f ./setup/deployment.dockerCompose.yml up --rm localStagingTest
    docker-compose -f ./setup/container/deployment.dockerCompose.yml -f ./setup/container/deployment.production-like.dockerCompose.yml up wordpress localStagingTest
}

deployment.buildImage() { # ⭐
    # 1. development / production
    export DEPLOYMENT=production
    # export DEPLOYMENT=development

    # 2. create and add privateRepository content in volumes:
    mkdir -p ./privateRepository/wordpressConfiguration

    # 3. Build Source COde:
    ./setup/run.sh deployment.buildDistribution

    # 4.
    # Problem cannot pass arguments to dockerfile
    docker-compose -f ./setup/container/deployment.dockerCompose.yml build --no-cache buildImage

    # Docker CLI implimentation :
    # context is relative to current working directory not like in compose which is relative.
    # docker build --build-arg DEPLOYMENT=${DEPLOYMENT} --tag dentrist-${DEPLOYMENT} -f ./setup/container/wordpress.php5.6.dockerfile ./

    # 5. tag image and push
}

# Important: call arguments verbatim. i.e. allows first argument to call functions inside file. So that it could be called as "./setup/run.sh <functionName>".
$@
