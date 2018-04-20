#!/bin/bash
USER_INFO_DB=users_info
STAGED_OBJECTIVES_DB=staged_objectives
ACTIVE_OBJECTIVES_DB=active_objectives

mongo 127.0.0.1:27017/$USER_INFO_DB ./setup_user_info.js
mongo 127.0.0.1:27017/$STAGED_OBJECTIVES_DB ./setup_staged_objectives.js
mongo 127.0.0.1:27017/$ACTIVE_OBJECTIVES_DB ./setup_active_objectives.js
