var FROM_NICK_CURCHAN=	"\x01N\x01B<\x01N%s\x01B>\x01N";
var FROM_NICK_OUTSIDE=	"\x01N\x01P<\x01N%s\x01P>\x01N";
var JOIN_FORMAT=	"\x01N\x01C*#* \x01H%s\x01K (\x01N\x01C%s\x01H\x01K) \x01N\x01Chas joined %s.";
var KICK_FORMAT=	"\x01N\x01C*#* \x01H%s\x01N\x01C has been kicked from %s \x01H\x01K(\x01N\x01C%s\x01H\x01K)";
var MODE_FORMAT=	"\x01N\x01C*#* \x01H%s\x01N\x01C sets %s mode\x01H\x01K:\x01C %s";
var MSG_FORMAT=		"\x01N\x01H\x01K< \x01N\x01M*\x01H%s\x01N\x01M*\x01N";
var NICK_FORMAT=	"\x01N\x01C*#* \x01H%s\x01N\x01C is now known as \x01H%s\x01N\x01C.";
var NOTICE_FORMAT=	"\x01N\x01H\x01K-\x01R%s\x01K-\x01N %s";
var PART_FORMAT=	"\x01N\x01C*#* \x01H%s\x01K (\x01N\x01C%s\x01H\x01K) \x01N\x01Chas left %s.";
var QUIT_FORMAT=	"\x01N\x01C*#* \x01H%s\x01N\x01C has quit %s \x01H\x01K(\x01N\x01C%s\x01H\x01K)";
var SQUIT_FROM_NICK=	"\x01N\x01H\x01G[\x01N\x01GSQUIT\x01H] %s\x01N\x01G has disconnected \x01H%s \x01K(\x01N\x01G%s\x01H\x01K)";
var SQUIT_FROM_SERVER=	"\x01N\x01H\x01G[\x01N\x01GSQUIT\x01H]\x01N\x01G The server \x01H%s\x01N\x01G has disconnected \x01H\x01K(\x01N\x01G%s\x01H\x01K)";
var TOPIC_FORMAT=	"\x01N\x01C*#* \x01H%s\x01N\x01C has changed the topic of %s to\x01H\x01K: \x01N%s";