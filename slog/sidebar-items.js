initSidebarItems({"enum":[["ErrorKind",""],["FilterLevel","Logging filtering level"],["Level","Log record level"]],"fn":[["async_stream","Stream logging records to IO asynchronously"],["discard","Discard all logging records"],["duplicate","Duplicate records to two drains"],["failover","Failover logging to secondary drain on primary's failure"],["filter","Filter by `cond` closure"],["level_filter","Filter by log level"],["stream","Stream logging records to IO"]],"macro":[["crit!","Log critical level record"],["debug!","Log debug level record"],["error!","Log error level record"],["info!","Log info level record"],["log!","Log message of a given level"],["o!","Convenience function for building `&[OwnedKeyValue]`"],["slog_crit!","Log critical level record (alias)"],["slog_debug!","Log debug level record (alias)"],["slog_error!","Log error level record"],["slog_info!","Log info level record (alias)"],["slog_log!","Log message of a given level (alias)"],["slog_trace!","Log trace level record (alias)"],["slog_warn!","Log warning level record (alias)"],["trace!","Log trace level record"],["warn!","Log warning level record"]],"mod":[["format","Output formating"],["ser","Serialization"]],"static":[["LOG_LEVEL_NAMES","Official capitalized logging (and logging filtering) level names"],["LOG_LEVEL_SHORT_NAMES","Official capitalized logging (and logging filtering) short level names"]],"struct":[["AsyncStreamer","Drain formating records and writing them to a byte-stream (io::Write) asynchronously."],["Discard","Drain discarding everything"],["Duplicate","Drain duplicating records to two sub-drains"],["Error",""],["Failover","Failover drain"],["Filter","Drain filtering records"],["LevelFilter","Record log level filter"],["Logger","Logger"],["OwnedKeyValueList","Chain of `OwnedKeyValue`-s of a `Logger` and its ancestors"],["OwnedKeyValueListIterator","Iterator over `OwnedKeyValue`-s"],["Record","Logging record"],["Streamer","Drain formating records and writing them to a byte-stream (io::Write)"]],"trait":[["Drain","Logging drain"],["Message","Log Record message"]],"type":[["BorrowedKeyValue","Key value pair that can be part of a logging record"],["OwnedKeyValue","Key value pair that can be owned by `Logger`"],["Result",""]]});