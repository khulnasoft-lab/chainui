export interface AvailablePairPayload {
  timeframe?: string;
  stake_currency?: string;
}

export type PairIntervalTuple = [string, string, string];

export interface AvailablePairResult {
  pairs: string[];
  /**
   * List of lists, as [pair, timeframe, candletype]
   */
  pair_interval: PairIntervalTuple[];
  length: number;
}

export interface PairCandlePayload {
  pair: string;
  timeframe: string;
  limit?: number;
  columns?: string[];
}

export interface PairHistoryPayload {
  pair: string;
  timeframe: string;
  timerange: string;
  strategy: string;
  chainaimodel?: string;
  columns?: string[];
}

export interface PairHistory {
  strategy: string;
  pair: string;
  timeframe: string;
  timeframe_ms: number;
  columns: string[];
  /** All columns - available starting with api 2.35
   * Contains all columns - columns may be filtered to the ones available.
   */
  all_columns?: string[];
  data: number[][];
  length: number;
  /** Number of buy signals in this response */
  buy_signals: number;
  /** Number of sell signals in this response */
  sell_signals: number;

  /** Number of long entry signals in this response */
  enter_long_signals?: number;
  /** Number of long exit signals in this response */
  exit_long_signals?: number;
  /** Number of short entry signals in this response */
  enter_short_signals?: number;
  /** Number of short exit signals in this response */
  exit_short_signals?: number;

  last_analyzed: number;
  /** Data start date in as millisecond timestamp */
  data_start_ts: number;
  /** Data start date in in the format YYYY-MM-DD HH24:MI:SS+00:00 */
  data_start: string;
  /** End date in in the format YYYY-MM-DD HH24:MI:SS+00:00 */
  data_stop: string;
  /** Data end date in as millisecond timestamp */
  data_stop_ts: number;
}
