#!/bin/bash
ENV_NODE_SERVER=$1
NODE_SERVER=$2

ps aux | grep node

forever start -r dotenv/config $NODE_SERVER dotenv_config_path=$ENV_NODE_SERVER