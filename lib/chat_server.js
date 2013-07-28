/**
 * Created with JetBrains WebStorm.
 * User: tmacbook
 * Date: 7/28/13
 * Time: 4:36 PM
 * Author:  TJ Marbois
 */

var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};
