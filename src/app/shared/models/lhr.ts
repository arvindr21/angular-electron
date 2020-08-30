export interface LighthouseResultObject {
  userAgent:         string;
  environment:       Environment;
  lighthouseVersion: string;
  fetchTime:         Date;
  requestedUrl:      string;
  finalUrl:          string;
  runWarnings:       any[];
  audits:            Audits;
  configSettings:    ConfigSettings;
  categories:        Categories;
  categoryGroups:    CategoryGroups;
  timing:            Timing;
  i18n:              I18N;
  stackPacks:        StackPack[];
}

export interface Audits {
  "is-on-https":                        DOMSize;
  "redirects-http":                     Accesskeys;
  "service-worker":                     DOMSize;
  "works-offline":                      DuplicatedJavascript;
  viewport:                             DuplicatedJavascript;
  "without-javascript":                 DuplicatedJavascript;
  "first-contentful-paint":             CriticalRequestChains;
  "largest-contentful-paint":           DuplicatedJavascript;
  "first-meaningful-paint":             CriticalRequestChains;
  "load-fast-enough-for-pwa":           CriticalRequestChains;
  "speed-index":                        DOMSize;
  "screenshot-thumbnails":              Accesskeys;
  "final-screenshot":                   Accesskeys;
  "estimated-input-latency":            BootupTime;
  "total-blocking-time":                DOMSize;
  "max-potential-fid":                  BootupTime;
  "cumulative-layout-shift":            CumulativeLayoutShift;
  "errors-in-console":                  Accesskeys;
  "server-response-time":               CumulativeLayoutShift;
  "first-cpu-idle":                     CriticalRequestChains;
  interactive:                          CumulativeLayoutShift;
  "user-timings":                       DOMSize;
  "critical-request-chains":            CriticalRequestChains;
  redirects:                            CumulativeLayoutShift;
  "installable-manifest":               Accesskeys;
  "apple-touch-icon":                   Accesskeys;
  "splash-screen":                      BootupTime;
  "themed-omnibox":                     BootupTime;
  "maskable-icon":                      BootupTime;
  "content-width":                      Accesskeys;
  "image-aspect-ratio":                 BootupTime;
  "image-size-responsive":              Accesskeys;
  "preload-fonts":                      Accesskeys;
  deprecations:                         Accesskeys;
  "mainthread-work-breakdown":          CriticalRequestChains;
  "bootup-time":                        BootupTime;
  "uses-rel-preload":                   CriticalRequestChains;
  "uses-rel-preconnect":                CumulativeLayoutShift;
  "font-display":                       Accesskeys;
  diagnostics:                          Accesskeys;
  "network-requests":                   DOMSize;
  "network-rtt":                        DOMSize;
  "network-server-latency":             DuplicatedJavascript;
  "main-thread-tasks":                  CriticalRequestChains;
  metrics:                              CumulativeLayoutShift;
  "offline-start-url":                  Accesskeys;
  "performance-budget":                 Accesskeys;
  "timing-budget":                      DOMSize;
  "resource-summary":                   CumulativeLayoutShift;
  "third-party-summary":                CumulativeLayoutShift;
  "largest-contentful-paint-element":   DuplicatedJavascript;
  "layout-shift-elements":              DuplicatedJavascript;
  "long-tasks":                         CriticalRequestChains;
  "no-unload-listeners":                CriticalRequestChains;
  "non-composited-animations":          BootupTime;
  "large-javascript-libraries":         CriticalRequestChains;
  "valid-source-maps":                  DuplicatedJavascript;
  "pwa-cross-browser":                  Accesskeys;
  "pwa-page-transitions":               Accesskeys;
  "pwa-each-page-has-url":              Accesskeys;
  accesskeys:                           Accesskeys;
  "aria-allowed-attr":                  Accesskeys;
  "aria-hidden-body":                   Accesskeys;
  "aria-hidden-focus":                  Accesskeys;
  "aria-input-field-name":              Accesskeys;
  "aria-required-attr":                 Accesskeys;
  "aria-required-children":             Accesskeys;
  "aria-required-parent":               Accesskeys;
  "aria-roles":                         Accesskeys;
  "aria-toggle-field-name":             Accesskeys;
  "aria-valid-attr-value":              Accesskeys;
  "aria-valid-attr":                    Accesskeys;
  "button-name":                        Accesskeys;
  bypass:                               Accesskeys;
  "color-contrast":                     Accesskeys;
  "definition-list":                    Accesskeys;
  dlitem:                               Accesskeys;
  "document-title":                     Accesskeys;
  "duplicate-id-active":                Accesskeys;
  "duplicate-id-aria":                  Accesskeys;
  "form-field-multiple-labels":         Accesskeys;
  "frame-title":                        Accesskeys;
  "heading-order":                      Accesskeys;
  "html-has-lang":                      BootupTime;
  "html-lang-valid":                    BootupTime;
  "image-alt":                          BootupTime;
  "input-image-alt":                    Accesskeys;
  label:                                DOMSize;
  "layout-table":                       DOMSize;
  "link-name":                          DOMSize;
  list:                                 Accesskeys;
  listitem:                             Accesskeys;
  "meta-refresh":                       BootupTime;
  "meta-viewport":                      BootupTime;
  "object-alt":                         DOMSize;
  tabindex:                             BootupTime;
  "td-headers-attr":                    CriticalRequestChains;
  "th-has-data-cells":                  CriticalRequestChains;
  "valid-lang":                         DuplicatedJavascript;
  "video-caption":                      DuplicatedJavascript;
  "video-description":                  DuplicatedJavascript;
  "custom-controls-labels":             Accesskeys;
  "custom-controls-roles":              Accesskeys;
  "focus-traps":                        Accesskeys;
  "focusable-controls":                 Accesskeys;
  "interactive-element-affordance":     BootupTime;
  "logical-tab-order":                  CriticalRequestChains;
  "managed-focus":                      BootupTime;
  "offscreen-content-hidden":           Accesskeys;
  "use-landmarks":                      DOMSize;
  "visual-order-follows-dom":           DuplicatedJavascript;
  "uses-long-cache-ttl":                DOMSize;
  "total-byte-weight":                  DOMSize;
  "offscreen-images":                   CumulativeLayoutShift;
  "render-blocking-resources":          CumulativeLayoutShift;
  "unminified-css":                     DuplicatedJavascript;
  "unminified-javascript":              CriticalRequestChains;
  "unused-css-rules":                   CriticalRequestChains;
  "unused-javascript":                  CumulativeLayoutShift;
  "uses-webp-images":                   DuplicatedJavascript;
  "uses-optimized-images":              DOMSize;
  "uses-text-compression":              DuplicatedJavascript;
  "uses-responsive-images":             DuplicatedJavascript;
  "efficient-animated-content":         DuplicatedJavascript;
  "duplicated-javascript":              DuplicatedJavascript;
  "legacy-javascript":                  CriticalRequestChains;
  "appcache-manifest":                  Accesskeys;
  doctype:                              Accesskeys;
  charset:                              Accesskeys;
  "dom-size":                           DOMSize;
  "external-anchors-use-rel-noopener":  Accesskeys;
  "geolocation-on-start":               Accesskeys;
  "no-document-write":                  Accesskeys;
  "no-vulnerable-libraries":            BootupTime;
  "js-libraries":                       BootupTime;
  "notification-on-start":              BootupTime;
  "password-inputs-can-be-pasted-into": Accesskeys;
  "uses-http2":                         CumulativeLayoutShift;
  "uses-passive-event-listeners":       Accesskeys;
  "meta-description":                   BootupTime;
  "http-status-code":                   BootupTime;
  "font-size":                          BootupTime;
  "link-text":                          CriticalRequestChains;
  "crawlable-anchors":                  Accesskeys;
  "is-crawlable":                       BootupTime;
  "robots-txt":                         Accesskeys;
  "tap-targets":                        CumulativeLayoutShift;
  hreflang:                             BootupTime;
  plugins:                              Accesskeys;
  canonical:                            Accesskeys;
  "structured-data":                    BootupTime;
}

export interface Accesskeys {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  warnings?:        string[];
  details?:         AccesskeysDetails;
  explanation?:     string;
  displayValue?:    string;
}

export interface AccesskeysDetails {
  type:       DebugDataType;
  headings?:  PurpleHeading[];
  items?:     PurpleItem[];
  debugData?: PurpleDebugData;
  timing?:    number;
  timestamp?: number;
  data?:      string;
  summary?:   PurpleSummary;
  scale?:     number;
}

export interface PurpleDebugData {
  type:   DebugDataType;
  impact: Impact;
  tags:   string[];
}

export enum Impact {
  Critical = "critical",
  Moderate = "moderate",
  Serious = "serious",
}

export enum DebugDataType {
  Debugdata = "debugdata",
  Filmstrip = "filmstrip",
  Screenshot = "screenshot",
  Table = "table",
}

export interface PurpleHeading {
  key:              string;
  itemType:         Channel;
  text:             string;
  granularity?:     number;
  displayUnit?:     string;
  subItemsHeading?: PurpleSubItemsHeading;
}

export enum Channel {
  Bytes = "bytes",
  Code = "code",
  Link = "link",
  MS = "ms",
  Node = "node",
  Numeric = "numeric",
  SourceLocation = "source-location",
  Text = "text",
  URL = "url",
}

export interface PurpleSubItemsHeading {
  key:       string;
  itemType?: Channel;
}

export interface PurpleItem {
  node?:                     OverlappingTargetClass;
  value?:                    string;
  source?:                   SourceClass | string;
  numRequests?:              number;
  numScripts?:               number;
  numStylesheets?:           number;
  numFonts?:                 number;
  numTasks?:                 number;
  numTasksOver10ms?:         number;
  numTasksOver25ms?:         number;
  numTasksOver50ms?:         number;
  numTasksOver100ms?:        number;
  numTasksOver500ms?:        number;
  rtt?:                      number;
  throughput?:               number;
  maxRtt?:                   number;
  maxServerLatency?:         number;
  totalByteWeight?:          number;
  totalTaskTime?:            number;
  mainDocumentTransferSize?: number;
  description?:              string;
  url?:                      string;
  href?:                     string;
  target?:                   Target;
  rel?:                      string;
  outerHTML?:                string;
  wastedMs?:                 number;
  label?:                    string;
  failures?:                 string[];
  isParseFailure?:           boolean;
  parseFailureReason?:       string;
  timing?:                   number;
  timestamp?:                number;
  data?:                     string;
}

export interface OverlappingTargetClass {
  type:          Channel;
  selector:      string;
  path:          string;
  snippet:       string;
  boundingRect?: BoundingRect;
  explanation?:  string;
  nodeLabel:     string;
}

export interface BoundingRect {
  top:    number;
  bottom: number;
  left:   number;
  right:  number;
  width:  number;
  height: number;
}

export interface SourceClass {
  type:         Channel;
  url?:         string;
  urlProvider?: URLProvider;
  line?:        number;
  column?:      number;
  value?:       string;
}

export enum URLProvider {
  Network = "network",
}

export enum Target {
  Blank = "_blank",
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PurpleSummary {
}

export enum ScoreDisplayMode {
  Binary = "binary",
  Informative = "informative",
  Manual = "manual",
  NotApplicable = "notApplicable",
  Numeric = "numeric",
}

export interface BootupTime {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  numericValue?:    number;
  numericUnit?:     NumericUnit;
  displayValue?:    string;
  details?:         BootupTimeDetails;
  warnings?:        any[];
  explanation?:     string;
}

export interface BootupTimeDetails {
  type:       DebugDataType;
  headings?:  PurpleHeading[];
  items:      FluffyItem[];
  summary?:   LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary;
  debugData?: FluffyDebugData;
}

export interface FluffyDebugData {
  type:    DebugDataType;
  impact?: Impact;
  tags?:   string[];
  stacks?: Stack[];
}

export interface Stack {
  id:       string;
  version?: string;
}

export interface FluffyItem {
  url?:                string;
  total?:              number;
  scripting?:          number;
  scriptParseCompile?: number;
  source?:             SourceClass;
  selector?:           string;
  coverage?:           string;
  fontSize?:           string;
  node?:               OverlappingTargetClass;
  name?:               string;
  version?:            string;
  npm?:                string;
  highestSeverity?:    string;
  vulnCount?:          number;
  detectedLib?:        DetectedLIB;
  failures?:           string[];
  isParseFailure?:     boolean;
  parseFailureReason?: string;
  themeColor?:         null;
}

export interface DetectedLIB {
  text: string;
  url:  string;
  type: Channel;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary {
  wastedMs?: number;
}

export enum NumericUnit {
  Millisecond = "millisecond",
  Unitless = "unitless",
}

export interface CriticalRequestChains {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  displayValue?:    string;
  details?:         CriticalRequestChainsDetails;
  numericValue?:    number;
  numericUnit?:     NumericUnit;
  explanation?:     string;
  warnings?:        any[];
}

export interface CriticalRequestChainsDetails {
  type:                 PurpleType;
  chains?:              Chains;
  longestChain?:        LongestChain;
  headings?:            FluffyHeading[];
  items?:               TentacledItem[];
  summary?:             PurpleSummary;
  overallSavingsMs?:    number;
  overallSavingsBytes?: number;
}

export interface Chains {
  "6C7AFC351F5625A69CE950BA6247D7C8": The6C7Afc351F5625A69Ce950Ba6247D7C8;
}

export interface The6C7Afc351F5625A69Ce950Ba6247D7C8 {
  request:  Request;
  children: Children;
}

export interface Children {
  "97413.2":   The9741310;
  "97413.3":   The9741310;
  "97413.4":   The974134;
  "97413.5":   The9741310;
  "97413.6":   The9741310;
  "97413.7":   The9741310;
  "97413.8":   The9741310;
  "97413.9":   The9741310;
  "97413.10":  The9741310;
  "97413.11":  The9741310;
  "97413.12":  The9741310;
  "97413.13":  The9741310;
  "97413.14":  The9741310;
  "97413.15":  The9741310;
  "97413.16":  The9741310;
  "97413.17":  The9741310;
  "97413.18":  The9741310;
  "97413.19":  The9741310;
  "97413.20":  The9741310;
  "97413.22":  The9741310;
  "97413.23":  The9741310;
  "97413.24":  The9741310;
  "97413.25":  The9741310;
  "97413.26":  The9741310;
  "97413.27":  The9741310;
  "97413.28":  The9741310;
  "97413.29":  The9741310;
  "97413.30":  The9741310;
  "97413.31":  The9741310;
  "97413.32":  The9741310;
  "97413.33":  The9741310;
  "97413.34":  The9741310;
  "97413.35":  The9741310;
  "97413.36":  The9741310;
  "97413.37":  The9741310;
  "97413.46":  The9741310;
  "97413.47":  The9741310;
  "97413.48":  The9741310;
  "97413.49":  The9741310;
  "97413.51":  The9741310;
  "97413.52":  The9741310;
  "97413.53":  The9741310;
  "97413.54":  The9741310;
  "97413.55":  The9741310;
  "97413.57":  The9741310;
  "97413.66":  The9741310;
  "97413.67":  The9741310;
  "97413.68":  The9741310;
  "97413.70":  The9741310;
  "97413.71":  The9741310;
  "97413.276": The9741310;
  "97413.432": The9741310;
}

export interface The9741310 {
  request: Request;
}

export interface Request {
  url:                  string;
  startTime:            number;
  endTime:              number;
  responseReceivedTime: number;
  transferSize:         number;
}

export interface The974134 {
  request:  Request;
  children: { [key: string]: The9741310 };
}

export interface FluffyHeading {
  key:              null | string;
  valueType?:       Channel;
  subItemsHeading?: FluffySubItemsHeading;
  label?:           string;
  itemType?:        Channel;
  text?:            string;
  granularity?:     number;
}

export interface FluffySubItemsHeading {
  key:        string;
  valueType?: Channel;
}

export interface TentacledItem {
  url?:           string;
  wastedBytes?:   number;
  subItems?:      PurpleSubItems;
  totalBytes?:    number;
  duration?:      number;
  startTime?:     number;
  group?:         string;
  groupLabel?:    string;
  source?:        SourceClass;
  wastedPercent?: number;
}

export interface PurpleSubItems {
  type:  SubItemsType;
  items: StickyItem[];
}

export interface StickyItem {
  signal:   string;
  location: SourceClass;
}

export enum SubItemsType {
  Subitems = "subitems",
}

export interface LongestChain {
  duration:     number;
  length:       number;
  transferSize: number;
}

export enum PurpleType {
  Criticalrequestchain = "criticalrequestchain",
  Opportunity = "opportunity",
  Table = "table",
}

export interface CumulativeLayoutShift {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  numericValue?:    number;
  numericUnit?:     NumericUnit;
  displayValue?:    string;
  details?:         CumulativeLayoutShiftDetails;
  warnings?:        any[];
}

export interface CumulativeLayoutShiftDetails {
  type:                 FluffyType;
  items:                IndigoItem[];
  headings?:            TentacledHeading[];
  overallSavingsMs?:    number;
  overallSavingsBytes?: number;
  summary?:             FluffySummary;
}

export interface TentacledHeading {
  key:              string;
  valueType?:       string;
  label?:           string;
  itemType?:        Channel;
  text?:            string;
  subItemsHeading?: TentacledSubItemsHeading;
  granularity?:     number;
}

export interface TentacledSubItemsHeading {
  key:        string;
  itemType?:  Channel;
  valueType?: Channel;
}

export interface IndigoItem {
  finalLayoutShiftTraceEventFound?:  boolean;
  firstContentfulPaint?:             number;
  firstMeaningfulPaint?:             number;
  largestContentfulPaint?:           number;
  firstCPUIdle?:                     number;
  interactive?:                      number;
  speedIndex?:                       number;
  estimatedInputLatency?:            number;
  totalBlockingTime?:                number;
  maxPotentialFID?:                  number;
  cumulativeLayoutShift?:            number;
  observedTimeOrigin?:               number;
  observedTimeOriginTs?:             number;
  observedNavigationStart?:          number;
  observedNavigationStartTs?:        number;
  observedFirstPaint?:               number;
  observedFirstPaintTs?:             number;
  observedFirstContentfulPaint?:     number;
  observedFirstContentfulPaintTs?:   number;
  observedFirstMeaningfulPaint?:     number;
  observedFirstMeaningfulPaintTs?:   number;
  observedLargestContentfulPaint?:   number;
  observedLargestContentfulPaintTs?: number;
  observedTraceEnd?:                 number;
  observedTraceEndTs?:               number;
  observedLoad?:                     number;
  observedLoadTs?:                   number;
  observedDomContentLoaded?:         number;
  observedDomContentLoadedTs?:       number;
  observedCumulativeLayoutShift?:    number;
  observedFirstVisualChange?:        number;
  observedFirstVisualChangeTs?:      number;
  observedLastVisualChange?:         number;
  observedLastVisualChangeTs?:       number;
  observedSpeedIndex?:               number;
  observedSpeedIndexTs?:             number;
  lcpInvalidated?:                   boolean;
  url?:                              string;
  requestStartTime?:                 number;
  totalBytes?:                       number;
  wastedBytes?:                      number;
  wastedPercent?:                    number;
  wastedMs?:                         number;
  resourceType?:                     string;
  label?:                            string;
  requestCount?:                     number;
  transferSize?:                     number;
  responseTime?:                     number;
  tapTarget?:                        OverlappingTargetClass;
  overlappingTarget?:                OverlappingTargetClass;
  tapTargetScore?:                   number;
  overlappingTargetScore?:           number;
  overlapScoreRatio?:                number;
  size?:                             string;
  width?:                            number;
  height?:                           number;
  mainThreadTime?:                   number;
  blockingTime?:                     number;
  entity?:                           DetectedLIB;
  subItems?:                         FluffySubItems;
  protocol?:                         Protocol;
}

export enum Protocol {
  HTTP11 = "http/1.1",
}

export interface FluffySubItems {
  type:  SubItemsType;
  items: IndecentItem[];
}

export interface IndecentItem {
  url:             string;
  mainThreadTime?: number;
  blockingTime:    number;
  transferSize:    number;
}

export interface FluffySummary {
  wastedBytes: number;
  wastedMs:    number;
}

export enum FluffyType {
  Debugdata = "debugdata",
  Opportunity = "opportunity",
  Table = "table",
}

export interface DOMSize {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  numericValue?:    number;
  numericUnit?:     string;
  displayValue?:    string;
  details?:         DOMSizeDetails;
  warnings?:        any[];
}

export interface DOMSizeDetails {
  type:                 PurpleType;
  headings:             StickyHeading[];
  items:                HilariousItem[];
  debugData?:           PurpleDebugData;
  summary?:             LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary;
  overallSavingsMs?:    number;
  overallSavingsBytes?: number;
}

export interface StickyHeading {
  key:          string;
  itemType?:    Channel;
  text?:        string;
  granularity?: number;
  displayUnit?: string;
  valueType?:   ValueType;
  label?:       string;
}

export enum ValueType {
  Bytes = "bytes",
  Thumbnail = "thumbnail",
  URL = "url",
}

export interface HilariousItem {
  statistic?:           string;
  element?:             ElementClass | string;
  value?:               string;
  node?:                OverlappingTargetClass;
  url?:                 string;
  startTime?:           number;
  endTime?:             number;
  finished?:            boolean;
  transferSize?:        number;
  resourceSize?:        number;
  statusCode?:          number;
  mimeType?:            MIMEType;
  resourceType?:        ResourceType;
  origin?:              string;
  rtt?:                 number;
  totalBytes?:          number;
  name?:                string;
  duration?:            number;
  timingType?:          TimingType;
  cacheLifetimeMs?:     number;
  cacheHitProbability?: number;
  wastedBytes?:         number;
  debugData?:           ItemDebugData;
  fromProtocol?:        boolean;
  isCrossOrigin?:       boolean;
}

export interface ItemDebugData {
  type:        DebugDataType;
  "max-age":   number;
  "s-maxage"?: string;
  public?:     boolean;
}

export interface ElementClass {
  type:  Channel;
  value: string;
}

export enum MIMEType {
  ApplicationJSON = "application/json",
  ApplicationJavascript = "application/javascript",
  ApplicationOctetStream = "application/octet-stream",
  ApplicationXJavascript = "application/x-javascript",
  Empty = "",
  FontWoff2 = "font/woff2",
  ImageGIF = "image/gif",
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  ImageSVGXML = "image/svg+xml",
  ImageWebp = "image/webp",
  TextCSS = "text/css",
  TextHTML = "text/html",
  TextJSON = "text/json",
  TextJavascript = "text/javascript",
  TextPlain = "text/plain",
  TextXML = "text/xml",
}

export enum ResourceType {
  Document = "Document",
  Fetch = "Fetch",
  Font = "Font",
  Image = "Image",
  Other = "Other",
  Script = "Script",
  Stylesheet = "Stylesheet",
  Xhr = "XHR",
}

export enum TimingType {
  Mark = "Mark",
  Measure = "Measure",
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary {
  wastedBytes: number;
}

export interface DuplicatedJavascript {
  id:               string;
  title:            string;
  description:      string;
  score:            number | null;
  scoreDisplayMode: ScoreDisplayMode;
  numericValue?:    number;
  numericUnit?:     NumericUnit;
  displayValue?:    string;
  details?:         DuplicatedJavascriptDetails;
  warnings?:        any[];
}

export interface DuplicatedJavascriptDetails {
  type:                 PurpleType;
  headings:             IndigoHeading[];
  items:                AmbitiousItem[];
  overallSavingsMs?:    number;
  overallSavingsBytes?: number;
}

export interface IndigoHeading {
  key:              string;
  itemType?:        Channel;
  text?:            string;
  granularity?:     number;
  valueType?:       ValueType;
  label?:           string;
  subItemsHeading?: StickySubItemsHeading;
}

export interface StickySubItemsHeading {
  key: string;
}

export interface AmbitiousItem {
  node?:               PurpleNode;
  score?:              number;
  origin?:             string;
  serverResponseTime?: number;
  url?:                string;
  totalBytes?:         number;
  wastedBytes?:        number;
  wastedPercent?:      number;
  fromProtocol?:       boolean;
  isCrossOrigin?:      boolean;
  scriptUrl?:          string;
  sourceMapUrl?:       string;
  subItems?:           TentacledSubItems;
}

export interface PurpleNode {
  type:         Channel;
  path:         string;
  selector:     string;
  nodeLabel:    string;
  snippet:      string;
  boundingRect: BoundingRect;
}

export interface TentacledSubItems {
  type:  SubItemsType;
  items: CunningItem[];
}

export interface CunningItem {
  error: string;
}

export interface Categories {
  performance:      BestPractices;
  accessibility:    Accessibility;
  "best-practices": BestPractices;
  seo:              Accessibility;
  pwa:              Accessibility;
}

export interface Accessibility {
  title:             string;
  description:       string;
  manualDescription: string;
  auditRefs:         AuditRef[];
  id:                string;
  score:             number;
}

export interface AuditRef {
  id:     string;
  weight: number;
  group?: string;
}

export interface BestPractices {
  title:     string;
  auditRefs: AuditRef[];
  id:        string;
  score:     number;
}

export interface CategoryGroups {
  metrics:                         BestPracticesBrowserCompat;
  "load-opportunities":            A11YAria;
  budgets:                         A11YAria;
  diagnostics:                     A11YAria;
  "pwa-fast-reliable":             BestPracticesBrowserCompat;
  "pwa-installable":               BestPracticesBrowserCompat;
  "pwa-optimized":                 BestPracticesBrowserCompat;
  "a11y-best-practices":           A11YAria;
  "a11y-color-contrast":           A11YAria;
  "a11y-names-labels":             A11YAria;
  "a11y-navigation":               A11YAria;
  "a11y-aria":                     A11YAria;
  "a11y-language":                 A11YAria;
  "a11y-audio-video":              A11YAria;
  "a11y-tables-lists":             A11YAria;
  "seo-mobile":                    A11YAria;
  "seo-content":                   A11YAria;
  "seo-crawl":                     A11YAria;
  "best-practices-trust-safety":   BestPracticesBrowserCompat;
  "best-practices-ux":             BestPracticesBrowserCompat;
  "best-practices-browser-compat": BestPracticesBrowserCompat;
  "best-practices-general":        BestPracticesBrowserCompat;
}

export interface A11YAria {
  title:       string;
  description: string;
}

export interface BestPracticesBrowserCompat {
  title: string;
}

export interface ConfigSettings {
  output:                               string;
  maxWaitForFcp:                        number;
  maxWaitForLoad:                       number;
  throttlingMethod:                     string;
  throttling:                           Throttling;
  auditMode:                            boolean;
  gatherMode:                           boolean;
  disableStorageReset:                  boolean;
  emulatedFormFactor:                   string;
  internalDisableDeviceScreenEmulation: boolean;
  channel:                              Channel;
  budgets:                              null;
  locale:                               string;
  blockedUrlPatterns:                   null;
  additionalTraceCategories:            null;
  extraHeaders:                         null;
  precomputedLanternData:               null;
  onlyAudits:                           null;
  onlyCategories:                       null;
  skipAudits:                           null;
}

export interface Throttling {
  rttMs:                  number;
  throughputKbps:         number;
  requestLatencyMs:       number;
  downloadThroughputKbps: number;
  uploadThroughputKbps:   number;
  cpuSlowdownMultiplier:  number;
}

export interface Environment {
  networkUserAgent: string;
  hostUserAgent:    string;
  benchmarkIndex:   number;
  credits:          Credits;
}

export interface Credits {
  "axe-core": string;
}

export interface I18N {
  rendererFormattedStrings: RendererFormattedStrings;
  icuMessagePaths:          IcuMessagePaths;
}

export interface IcuMessagePaths {
  "lighthouse-core/audits/is-on-https.js | title":                                                  string[];
  "lighthouse-core/audits/is-on-https.js | description":                                            string[];
  "lighthouse-core/audits/redirects-http.js | title":                                               string[];
  "lighthouse-core/audits/redirects-http.js | description":                                         string[];
  "lighthouse-core/audits/service-worker.js | failureTitle":                                        string[];
  "lighthouse-core/audits/service-worker.js | description":                                         string[];
  "lighthouse-core/audits/works-offline.js | failureTitle":                                         string[];
  "lighthouse-core/audits/works-offline.js | description":                                          string[];
  "lighthouse-core/audits/viewport.js | title":                                                     string[];
  "lighthouse-core/audits/viewport.js | description":                                               string[];
  "lighthouse-core/audits/without-javascript.js | title":                                           string[];
  "lighthouse-core/audits/without-javascript.js | description":                                     string[];
  "lighthouse-core/lib/i18n/i18n.js | firstContentfulPaintMetric":                                  string[];
  "lighthouse-core/audits/metrics/first-contentful-paint.js | description":                         string[];
  "lighthouse-core/lib/i18n/i18n.js | seconds":                                                     LighthouseCore[];
  "lighthouse-core/lib/i18n/i18n.js | largestContentfulPaintMetric":                                string[];
  "lighthouse-core/audits/metrics/largest-contentful-paint.js | description":                       string[];
  "lighthouse-core/lib/i18n/i18n.js | firstMeaningfulPaintMetric":                                  string[];
  "lighthouse-core/audits/metrics/first-meaningful-paint.js | description":                         string[];
  "lighthouse-core/audits/load-fast-enough-for-pwa.js | failureTitle":                              string[];
  "lighthouse-core/audits/load-fast-enough-for-pwa.js | description":                               string[];
  "lighthouse-core/audits/load-fast-enough-for-pwa.js | displayValueText":                          LighthouseCore[];
  "lighthouse-core/audits/load-fast-enough-for-pwa.js | explanationLoadSlow":                       string[];
  "lighthouse-core/lib/i18n/i18n.js | speedIndexMetric":                                            string[];
  "lighthouse-core/audits/metrics/speed-index.js | description":                                    string[];
  "lighthouse-core/lib/i18n/i18n.js | estimatedInputLatencyMetric":                                 string[];
  "lighthouse-core/audits/metrics/estimated-input-latency.js | description":                        string[];
  "lighthouse-core/lib/i18n/i18n.js | ms":                                                          LighthouseCore[];
  "lighthouse-core/lib/i18n/i18n.js | totalBlockingTimeMetric":                                     string[];
  "lighthouse-core/audits/metrics/total-blocking-time.js | description":                            string[];
  "lighthouse-core/lib/i18n/i18n.js | maxPotentialFIDMetric":                                       string[];
  "lighthouse-core/audits/metrics/max-potential-fid.js | description":                              string[];
  "lighthouse-core/lib/i18n/i18n.js | cumulativeLayoutShiftMetric":                                 string[];
  "lighthouse-core/audits/metrics/cumulative-layout-shift.js | description":                        string[];
  "lighthouse-core/audits/errors-in-console.js | failureTitle":                                     string[];
  "lighthouse-core/audits/errors-in-console.js | description":                                      string[];
  "lighthouse-core/lib/i18n/i18n.js | columnURL":                                                   string[];
  "lighthouse-core/audits/errors-in-console.js | columnDesc":                                       string[];
  "lighthouse-core/audits/server-response-time.js | failureTitle":                                  string[];
  "lighthouse-core/audits/server-response-time.js | description":                                   string[];
  "lighthouse-core/audits/server-response-time.js | displayValue":                                  LighthouseCore[];
  "lighthouse-core/lib/i18n/i18n.js | columnTimeSpent":                                             string[];
  "lighthouse-core/lib/i18n/i18n.js | firstCPUIdleMetric":                                          string[];
  "lighthouse-core/audits/metrics/first-cpu-idle.js | description":                                 string[];
  "lighthouse-core/lib/i18n/i18n.js | interactiveMetric":                                           string[];
  "lighthouse-core/audits/metrics/interactive.js | description":                                    string[];
  "lighthouse-core/audits/user-timings.js | title":                                                 string[];
  "lighthouse-core/audits/user-timings.js | description":                                           string[];
  "lighthouse-core/audits/user-timings.js | displayValue":                                          LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/lib/i18n/i18n.js | columnName":                                                  string[];
  "lighthouse-core/audits/user-timings.js | columnType":                                            string[];
  "lighthouse-core/lib/i18n/i18n.js | columnStartTime":                                             string[];
  "lighthouse-core/lib/i18n/i18n.js | columnDuration":                                              string[];
  "lighthouse-core/audits/critical-request-chains.js | title":                                      string[];
  "lighthouse-core/audits/critical-request-chains.js | description":                                string[];
  "lighthouse-core/audits/critical-request-chains.js | displayValue":                               LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/audits/redirects.js | title":                                                    string[];
  "lighthouse-core/audits/redirects.js | description":                                              string[];
  "lighthouse-core/audits/installable-manifest.js | failureTitle":                                  string[];
  "lighthouse-core/audits/installable-manifest.js | description":                                   string[];
  "lighthouse-core/audits/apple-touch-icon.js | title":                                             string[];
  "lighthouse-core/audits/apple-touch-icon.js | description":                                       string[];
  "lighthouse-core/audits/apple-touch-icon.js | precomposedWarning":                                string[];
  "lighthouse-core/audits/splash-screen.js | failureTitle":                                         string[];
  "lighthouse-core/audits/splash-screen.js | description":                                          string[];
  "lighthouse-core/audits/themed-omnibox.js | failureTitle":                                        string[];
  "lighthouse-core/audits/themed-omnibox.js | description":                                         string[];
  "lighthouse-core/audits/maskable-icon.js | failureTitle":                                         string[];
  "lighthouse-core/audits/maskable-icon.js | description":                                          string[];
  "lighthouse-core/audits/content-width.js | title":                                                string[];
  "lighthouse-core/audits/content-width.js | description":                                          string[];
  "lighthouse-core/audits/image-aspect-ratio.js | title":                                           string[];
  "lighthouse-core/audits/image-aspect-ratio.js | description":                                     string[];
  "lighthouse-core/audits/image-size-responsive.js | title":                                        string[];
  "lighthouse-core/audits/image-size-responsive.js | description":                                  string[];
  "lighthouse-core/audits/preload-fonts.js | title":                                                string[];
  "lighthouse-core/audits/preload-fonts.js | description":                                          string[];
  "lighthouse-core/audits/deprecations.js | failureTitle":                                          string[];
  "lighthouse-core/audits/deprecations.js | description":                                           string[];
  "lighthouse-core/audits/deprecations.js | displayValue":                                          LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/audits/deprecations.js | columnDeprecate":                                       string[];
  "lighthouse-core/audits/mainthread-work-breakdown.js | failureTitle":                             string[];
  "lighthouse-core/audits/mainthread-work-breakdown.js | description":                              string[];
  "lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory":                           string[];
  "lighthouse-core/audits/bootup-time.js | failureTitle":                                           string[];
  "lighthouse-core/audits/bootup-time.js | description":                                            string[];
  "lighthouse-core/audits/bootup-time.js | columnTotal":                                            string[];
  "lighthouse-core/audits/bootup-time.js | columnScriptEval":                                       string[];
  "lighthouse-core/audits/bootup-time.js | columnScriptParse":                                      string[];
  "lighthouse-core/audits/uses-rel-preload.js | title":                                             string[];
  "lighthouse-core/audits/uses-rel-preload.js | description":                                       string[];
  "lighthouse-core/audits/uses-rel-preconnect.js | title":                                          string[];
  "lighthouse-core/audits/uses-rel-preconnect.js | description":                                    string[];
  "lighthouse-core/lib/i18n/i18n.js | displayValueMsSavings":                                       LighthouseCoreLIBI18NI18NJSDisplayValueMSSaving[];
  "lighthouse-core/lib/i18n/i18n.js | columnWastedBytes":                                           string[];
  "lighthouse-core/audits/font-display.js | failureTitle":                                          string[];
  "lighthouse-core/audits/font-display.js | description":                                           string[];
  "lighthouse-core/audits/network-rtt.js | title":                                                  string[];
  "lighthouse-core/audits/network-rtt.js | description":                                            string[];
  "lighthouse-core/audits/network-server-latency.js | title":                                       string[];
  "lighthouse-core/audits/network-server-latency.js | description":                                 string[];
  "lighthouse-core/audits/offline-start-url.js | failureTitle":                                     string[];
  "lighthouse-core/audits/offline-start-url.js | description":                                      string[];
  "lighthouse-core/audits/performance-budget.js | title":                                           string[];
  "lighthouse-core/audits/performance-budget.js | description":                                     string[];
  "lighthouse-core/audits/timing-budget.js | title":                                                string[];
  "lighthouse-core/audits/timing-budget.js | description":                                          string[];
  "lighthouse-core/audits/resource-summary.js | title":                                             string[];
  "lighthouse-core/audits/resource-summary.js | description":                                       string[];
  "lighthouse-core/audits/resource-summary.js | displayValue":                                      LighthouseCoreAuditsResourceSummaryJSDisplayValue[];
  "lighthouse-core/lib/i18n/i18n.js | columnResourceType":                                          string[];
  "lighthouse-core/lib/i18n/i18n.js | columnRequests":                                              string[];
  "lighthouse-core/lib/i18n/i18n.js | columnTransferSize":                                          string[];
  "lighthouse-core/lib/i18n/i18n.js | totalResourceType":                                           string[];
  "lighthouse-core/lib/i18n/i18n.js | scriptResourceType":                                          string[];
  "lighthouse-core/lib/i18n/i18n.js | imageResourceType":                                           string[];
  "lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType":                                      string[];
  "lighthouse-core/lib/i18n/i18n.js | documentResourceType":                                        string[];
  "lighthouse-core/lib/i18n/i18n.js | otherResourceType":                                           string[];
  "lighthouse-core/lib/i18n/i18n.js | fontResourceType":                                            string[];
  "lighthouse-core/lib/i18n/i18n.js | mediaResourceType":                                           string[];
  "lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType":                                      string[];
  "lighthouse-core/audits/third-party-summary.js | failureTitle":                                   string[];
  "lighthouse-core/audits/third-party-summary.js | description":                                    string[];
  "lighthouse-core/audits/third-party-summary.js | displayValue":                                   LighthouseCore[];
  "lighthouse-core/audits/third-party-summary.js | columnThirdParty":                               string[];
  "lighthouse-core/audits/third-party-summary.js | columnBlockingTime":                             string[];
  "lighthouse-core/audits/third-party-summary.js | otherValue":                                     string[];
  "lighthouse-core/audits/largest-contentful-paint-element.js | title":                             string[];
  "lighthouse-core/audits/largest-contentful-paint-element.js | description":                       string[];
  "lighthouse-core/lib/i18n/i18n.js | displayValueElementsFound":                                   LighthouseCoreLIBI18NI18NJSDisplayValueElementsFound[];
  "lighthouse-core/lib/i18n/i18n.js | columnElement":                                               string[];
  "lighthouse-core/audits/layout-shift-elements.js | title":                                        string[];
  "lighthouse-core/audits/layout-shift-elements.js | description":                                  string[];
  "lighthouse-core/audits/layout-shift-elements.js | columnContribution":                           string[];
  "lighthouse-core/audits/long-tasks.js | title":                                                   string[];
  "lighthouse-core/audits/long-tasks.js | description":                                             string[];
  "lighthouse-core/audits/long-tasks.js | displayValue":                                            LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/audits/no-unload-listeners.js | failureTitle":                                   string[];
  "lighthouse-core/audits/no-unload-listeners.js | description":                                    string[];
  "lighthouse-core/audits/non-composited-animations.js | title":                                    string[];
  "lighthouse-core/audits/non-composited-animations.js | description":                              string[];
  "lighthouse-core/audits/large-javascript-libraries.js | title":                                   string[];
  "lighthouse-core/audits/large-javascript-libraries.js | description":                             string[];
  "lighthouse-core/audits/large-javascript-libraries.js | displayValue":                            LighthouseCoreAuditsLargeJavascriptLibrariesJSDisplayValue[];
  "lighthouse-core/audits/valid-source-maps.js | title":                                            string[];
  "lighthouse-core/audits/valid-source-maps.js | description":                                      string[];
  "lighthouse-core/audits/valid-source-maps.js | columnMapURL":                                     string[];
  "lighthouse-core/audits/valid-source-maps.js | missingSourceMapItemsWarningMesssage":             LighthouseCoreAuditsValidSourceMapsJSMissingSourceMapItemsWarningMesssage[];
  "lighthouse-core/audits/manual/pwa-cross-browser.js | title":                                     string[];
  "lighthouse-core/audits/manual/pwa-cross-browser.js | description":                               string[];
  "lighthouse-core/audits/manual/pwa-page-transitions.js | title":                                  string[];
  "lighthouse-core/audits/manual/pwa-page-transitions.js | description":                            string[];
  "lighthouse-core/audits/manual/pwa-each-page-has-url.js | title":                                 string[];
  "lighthouse-core/audits/manual/pwa-each-page-has-url.js | description":                           string[];
  "lighthouse-core/audits/accessibility/accesskeys.js | title":                                     string[];
  "lighthouse-core/audits/accessibility/accesskeys.js | description":                               string[];
  "lighthouse-core/audits/accessibility/aria-allowed-attr.js | failureTitle":                       string[];
  "lighthouse-core/audits/accessibility/aria-allowed-attr.js | description":                        string[];
  "lighthouse-core/lib/i18n/i18n.js | columnFailingElem":                                           string[];
  "lighthouse-core/audits/accessibility/aria-hidden-body.js | title":                               string[];
  "lighthouse-core/audits/accessibility/aria-hidden-body.js | description":                         string[];
  "lighthouse-core/audits/accessibility/aria-hidden-focus.js | failureTitle":                       string[];
  "lighthouse-core/audits/accessibility/aria-hidden-focus.js | description":                        string[];
  "lighthouse-core/audits/accessibility/aria-input-field-name.js | title":                          string[];
  "lighthouse-core/audits/accessibility/aria-input-field-name.js | description":                    string[];
  "lighthouse-core/audits/accessibility/aria-required-attr.js | title":                             string[];
  "lighthouse-core/audits/accessibility/aria-required-attr.js | description":                       string[];
  "lighthouse-core/audits/accessibility/aria-required-children.js | title":                         string[];
  "lighthouse-core/audits/accessibility/aria-required-children.js | description":                   string[];
  "lighthouse-core/audits/accessibility/aria-required-parent.js | failureTitle":                    string[];
  "lighthouse-core/audits/accessibility/aria-required-parent.js | description":                     string[];
  "lighthouse-core/audits/accessibility/aria-roles.js | title":                                     string[];
  "lighthouse-core/audits/accessibility/aria-roles.js | description":                               string[];
  "lighthouse-core/audits/accessibility/aria-toggle-field-name.js | title":                         string[];
  "lighthouse-core/audits/accessibility/aria-toggle-field-name.js | description":                   string[];
  "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title":                          string[];
  "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description":                    string[];
  "lighthouse-core/audits/accessibility/aria-valid-attr.js | title":                                string[];
  "lighthouse-core/audits/accessibility/aria-valid-attr.js | description":                          string[];
  "lighthouse-core/audits/accessibility/button-name.js | failureTitle":                             string[];
  "lighthouse-core/audits/accessibility/button-name.js | description":                              string[];
  "lighthouse-core/audits/accessibility/bypass.js | title":                                         string[];
  "lighthouse-core/audits/accessibility/bypass.js | description":                                   string[];
  "lighthouse-core/audits/accessibility/color-contrast.js | failureTitle":                          string[];
  "lighthouse-core/audits/accessibility/color-contrast.js | description":                           string[];
  "lighthouse-core/audits/accessibility/definition-list.js | title":                                string[];
  "lighthouse-core/audits/accessibility/definition-list.js | description":                          string[];
  "lighthouse-core/audits/accessibility/dlitem.js | title":                                         string[];
  "lighthouse-core/audits/accessibility/dlitem.js | description":                                   string[];
  "lighthouse-core/audits/accessibility/document-title.js | title":                                 string[];
  "lighthouse-core/audits/accessibility/document-title.js | description":                           string[];
  "lighthouse-core/audits/accessibility/duplicate-id-active.js | title":                            string[];
  "lighthouse-core/audits/accessibility/duplicate-id-active.js | description":                      string[];
  "lighthouse-core/audits/accessibility/duplicate-id-aria.js | title":                              string[];
  "lighthouse-core/audits/accessibility/duplicate-id-aria.js | description":                        string[];
  "lighthouse-core/audits/accessibility/form-field-multiple-labels.js | title":                     string[];
  "lighthouse-core/audits/accessibility/form-field-multiple-labels.js | description":               string[];
  "lighthouse-core/audits/accessibility/frame-title.js | title":                                    string[];
  "lighthouse-core/audits/accessibility/frame-title.js | description":                              string[];
  "lighthouse-core/audits/accessibility/heading-order.js | failureTitle":                           string[];
  "lighthouse-core/audits/accessibility/heading-order.js | description":                            string[];
  "lighthouse-core/audits/accessibility/html-has-lang.js | title":                                  string[];
  "lighthouse-core/audits/accessibility/html-has-lang.js | description":                            string[];
  "lighthouse-core/audits/accessibility/html-lang-valid.js | title":                                string[];
  "lighthouse-core/audits/accessibility/html-lang-valid.js | description":                          string[];
  "lighthouse-core/audits/accessibility/image-alt.js | failureTitle":                               string[];
  "lighthouse-core/audits/accessibility/image-alt.js | description":                                string[];
  "lighthouse-core/audits/accessibility/input-image-alt.js | title":                                string[];
  "lighthouse-core/audits/accessibility/input-image-alt.js | description":                          string[];
  "lighthouse-core/audits/accessibility/label.js | title":                                          string[];
  "lighthouse-core/audits/accessibility/label.js | description":                                    string[];
  "lighthouse-core/audits/accessibility/layout-table.js | title":                                   string[];
  "lighthouse-core/audits/accessibility/layout-table.js | description":                             string[];
  "lighthouse-core/audits/accessibility/link-name.js | failureTitle":                               string[];
  "lighthouse-core/audits/accessibility/link-name.js | description":                                string[];
  "lighthouse-core/audits/accessibility/list.js | failureTitle":                                    string[];
  "lighthouse-core/audits/accessibility/list.js | description":                                     string[];
  "lighthouse-core/audits/accessibility/listitem.js | failureTitle":                                string[];
  "lighthouse-core/audits/accessibility/listitem.js | description":                                 string[];
  "lighthouse-core/audits/accessibility/meta-refresh.js | title":                                   string[];
  "lighthouse-core/audits/accessibility/meta-refresh.js | description":                             string[];
  "lighthouse-core/audits/accessibility/meta-viewport.js | title":                                  string[];
  "lighthouse-core/audits/accessibility/meta-viewport.js | description":                            string[];
  "lighthouse-core/audits/accessibility/object-alt.js | title":                                     string[];
  "lighthouse-core/audits/accessibility/object-alt.js | description":                               string[];
  "lighthouse-core/audits/accessibility/tabindex.js | title":                                       string[];
  "lighthouse-core/audits/accessibility/tabindex.js | description":                                 string[];
  "lighthouse-core/audits/accessibility/td-headers-attr.js | title":                                string[];
  "lighthouse-core/audits/accessibility/td-headers-attr.js | description":                          string[];
  "lighthouse-core/audits/accessibility/th-has-data-cells.js | title":                              string[];
  "lighthouse-core/audits/accessibility/th-has-data-cells.js | description":                        string[];
  "lighthouse-core/audits/accessibility/valid-lang.js | title":                                     string[];
  "lighthouse-core/audits/accessibility/valid-lang.js | description":                               string[];
  "lighthouse-core/audits/accessibility/video-caption.js | title":                                  string[];
  "lighthouse-core/audits/accessibility/video-caption.js | description":                            string[];
  "lighthouse-core/audits/accessibility/video-description.js | title":                              string[];
  "lighthouse-core/audits/accessibility/video-description.js | description":                        string[];
  "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | failureTitle":                   string[];
  "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description":                    string[];
  "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue":                   LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/lib/i18n/i18n.js | columnCacheTTL":                                              string[];
  "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | failureTitle":                     string[];
  "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description":                      string[];
  "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue":                     LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue[];
  "lighthouse-core/audits/byte-efficiency/offscreen-images.js | title":                             string[];
  "lighthouse-core/audits/byte-efficiency/offscreen-images.js | description":                       string[];
  "lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings":                                     LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving[];
  "lighthouse-core/lib/i18n/i18n.js | columnResourceSize":                                          string[];
  "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title":                    string[];
  "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description":              string[];
  "lighthouse-core/audits/byte-efficiency/unminified-css.js | title":                               string[];
  "lighthouse-core/audits/byte-efficiency/unminified-css.js | description":                         string[];
  "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title":                        string[];
  "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description":                  string[];
  "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title":                             string[];
  "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description":                       string[];
  "lighthouse-core/audits/byte-efficiency/unused-javascript.js | title":                            string[];
  "lighthouse-core/audits/byte-efficiency/unused-javascript.js | description":                      string[];
  "lighthouse-core/audits/byte-efficiency/uses-webp-images.js | title":                             string[];
  "lighthouse-core/audits/byte-efficiency/uses-webp-images.js | description":                       string[];
  "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title":                        string[];
  "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description":                  string[];
  "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title":                        string[];
  "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description":                  string[];
  "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title":                       string[];
  "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description":                 string[];
  "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title":                   string[];
  "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description":             string[];
  "lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | title":                        string[];
  "lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | description":                  string[];
  "lighthouse-core/audits/byte-efficiency/legacy-javascript.js | title":                            string[];
  "lighthouse-core/audits/byte-efficiency/legacy-javascript.js | description":                      string[];
  "lighthouse-core/audits/dobetterweb/appcache-manifest.js | title":                                string[];
  "lighthouse-core/audits/dobetterweb/appcache-manifest.js | description":                          string[];
  "lighthouse-core/audits/dobetterweb/doctype.js | title":                                          string[];
  "lighthouse-core/audits/dobetterweb/doctype.js | description":                                    string[];
  "lighthouse-core/audits/dobetterweb/charset.js | title":                                          string[];
  "lighthouse-core/audits/dobetterweb/charset.js | description":                                    string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | failureTitle":                                  string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | description":                                   string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | displayValue":                                  LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic":                               string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | columnValue":                                   string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements":                          string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth":                             string[];
  "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth":                             string[];
  "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | failureTitle":         string[];
  "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | description":          string[];
  "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | columnFailingAnchors": string[];
  "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | failureTitle":                      string[];
  "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | description":                       string[];
  "lighthouse-core/lib/i18n/i18n.js | columnLocation":                                              string[];
  "lighthouse-core/audits/dobetterweb/no-document-write.js | failureTitle":                         string[];
  "lighthouse-core/audits/dobetterweb/no-document-write.js | description":                          string[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | failureTitle":                   string[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description":                    string[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | displayValue":                   LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVersion":                  string[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVuln":                     string[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnSeverity":                 string[];
  "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | rowSeverityMedium":              string[];
  "lighthouse-core/audits/dobetterweb/js-libraries.js | title":                                     string[];
  "lighthouse-core/audits/dobetterweb/js-libraries.js | description":                               string[];
  "lighthouse-core/audits/dobetterweb/js-libraries.js | columnVersion":                             string[];
  "lighthouse-core/audits/dobetterweb/notification-on-start.js | title":                            string[];
  "lighthouse-core/audits/dobetterweb/notification-on-start.js | description":                      string[];
  "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | title":               string[];
  "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | description":         string[];
  "lighthouse-core/audits/dobetterweb/uses-http2.js | title":                                       string[];
  "lighthouse-core/audits/dobetterweb/uses-http2.js | description":                                 string[];
  "lighthouse-core/audits/dobetterweb/uses-http2.js | displayValue":                                LighthouseCoreAuditsJSDisplayValue[];
  "lighthouse-core/audits/dobetterweb/uses-http2.js | columnProtocol":                              string[];
  "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | failureTitle":              string[];
  "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description":               string[];
  "lighthouse-core/audits/seo/meta-description.js | title":                                         string[];
  "lighthouse-core/audits/seo/meta-description.js | description":                                   string[];
  "lighthouse-core/audits/seo/http-status-code.js | title":                                         string[];
  "lighthouse-core/audits/seo/http-status-code.js | description":                                   string[];
  "lighthouse-core/audits/seo/font-size.js | title":                                                string[];
  "lighthouse-core/audits/seo/font-size.js | description":                                          string[];
  "lighthouse-core/audits/seo/font-size.js | displayValue":                                         LighthouseCoreAuditsSEOJSDisplayValue[];
  "lighthouse-core/audits/seo/font-size.js | legibleText":                                          string[];
  "lighthouse-core/audits/seo/link-text.js | title":                                                string[];
  "lighthouse-core/audits/seo/link-text.js | description":                                          string[];
  "lighthouse-core/audits/seo/crawlable-anchors.js | failureTitle":                                 string[];
  "lighthouse-core/audits/seo/crawlable-anchors.js | description":                                  string[];
  "lighthouse-core/audits/seo/crawlable-anchors.js | columnFailingLink":                            string[];
  "lighthouse-core/audits/seo/is-crawlable.js | title":                                             string[];
  "lighthouse-core/audits/seo/is-crawlable.js | description":                                       string[];
  "lighthouse-core/audits/seo/robots-txt.js | title":                                               string[];
  "lighthouse-core/audits/seo/robots-txt.js | description":                                         string[];
  "lighthouse-core/audits/seo/tap-targets.js | failureTitle":                                       string[];
  "lighthouse-core/audits/seo/tap-targets.js | description":                                        string[];
  "lighthouse-core/audits/seo/tap-targets.js | displayValue":                                       LighthouseCoreAuditsSEOJSDisplayValue[];
  "lighthouse-core/audits/seo/tap-targets.js | tapTargetHeader":                                    string[];
  "lighthouse-core/lib/i18n/i18n.js | columnSize":                                                  string[];
  "lighthouse-core/audits/seo/tap-targets.js | overlappingTargetHeader":                            string[];
  "lighthouse-core/audits/seo/hreflang.js | title":                                                 string[];
  "lighthouse-core/audits/seo/hreflang.js | description":                                           string[];
  "lighthouse-core/audits/seo/plugins.js | title":                                                  string[];
  "lighthouse-core/audits/seo/plugins.js | description":                                            string[];
  "lighthouse-core/audits/seo/canonical.js | title":                                                string[];
  "lighthouse-core/audits/seo/canonical.js | description":                                          string[];
  "lighthouse-core/audits/seo/manual/structured-data.js | title":                                   string[];
  "lighthouse-core/audits/seo/manual/structured-data.js | description":                             string[];
  "lighthouse-core/config/default-config.js | performanceCategoryTitle":                            string[];
  "lighthouse-core/config/default-config.js | a11yCategoryTitle":                                   string[];
  "lighthouse-core/config/default-config.js | a11yCategoryDescription":                             string[];
  "lighthouse-core/config/default-config.js | a11yCategoryManualDescription":                       string[];
  "lighthouse-core/config/default-config.js | bestPracticesCategoryTitle":                          string[];
  "lighthouse-core/config/default-config.js | seoCategoryTitle":                                    string[];
  "lighthouse-core/config/default-config.js | seoCategoryDescription":                              string[];
  "lighthouse-core/config/default-config.js | seoCategoryManualDescription":                        string[];
  "lighthouse-core/config/default-config.js | pwaCategoryTitle":                                    string[];
  "lighthouse-core/config/default-config.js | pwaCategoryDescription":                              string[];
  "lighthouse-core/config/default-config.js | pwaCategoryManualDescription":                        string[];
  "lighthouse-core/config/default-config.js | metricGroupTitle":                                    string[];
  "lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle":                         string[];
  "lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription":                   string[];
  "lighthouse-core/config/default-config.js | budgetsGroupTitle":                                   string[];
  "lighthouse-core/config/default-config.js | budgetsGroupDescription":                             string[];
  "lighthouse-core/config/default-config.js | diagnosticsGroupTitle":                               string[];
  "lighthouse-core/config/default-config.js | diagnosticsGroupDescription":                         string[];
  "lighthouse-core/config/default-config.js | pwaFastReliableGroupTitle":                           string[];
  "lighthouse-core/config/default-config.js | pwaInstallableGroupTitle":                            string[];
  "lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle":                              string[];
  "lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle":                         string[];
  "lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription":                   string[];
  "lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle":                         string[];
  "lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription":                   string[];
  "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle":                           string[];
  "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription":                     string[];
  "lighthouse-core/config/default-config.js | a11yNavigationGroupTitle":                            string[];
  "lighthouse-core/config/default-config.js | a11yNavigationGroupDescription":                      string[];
  "lighthouse-core/config/default-config.js | a11yAriaGroupTitle":                                  string[];
  "lighthouse-core/config/default-config.js | a11yAriaGroupDescription":                            string[];
  "lighthouse-core/config/default-config.js | a11yLanguageGroupTitle":                              string[];
  "lighthouse-core/config/default-config.js | a11yLanguageGroupDescription":                        string[];
  "lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle":                            string[];
  "lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription":                      string[];
  "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle":                      string[];
  "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription":                string[];
  "lighthouse-core/config/default-config.js | seoMobileGroupTitle":                                 string[];
  "lighthouse-core/config/default-config.js | seoMobileGroupDescription":                           string[];
  "lighthouse-core/config/default-config.js | seoContentGroupTitle":                                string[];
  "lighthouse-core/config/default-config.js | seoContentGroupDescription":                          string[];
  "lighthouse-core/config/default-config.js | seoCrawlingGroupTitle":                               string[];
  "lighthouse-core/config/default-config.js | seoCrawlingGroupDescription":                         string[];
  "lighthouse-core/config/default-config.js | bestPracticesTrustSafetyGroupTitle":                  string[];
  "lighthouse-core/config/default-config.js | bestPracticesUXGroupTitle":                           string[];
  "lighthouse-core/config/default-config.js | bestPracticesBrowserCompatGroupTitle":                string[];
  "lighthouse-core/config/default-config.js | bestPracticesGeneralGroupTitle":                      string[];
  "stack-packs/packs/react.js | unminified_css":                                                    string[];
  "stack-packs/packs/react.js | unminified_javascript":                                             string[];
  "stack-packs/packs/react.js | unused_javascript":                                                 string[];
  "stack-packs/packs/react.js | server_response_time":                                              string[];
  "stack-packs/packs/react.js | redirects":                                                         string[];
  "stack-packs/packs/react.js | user_timings":                                                      string[];
  "stack-packs/packs/react.js | dom_size":                                                          string[];
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue {
  values: LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues;
  path:   string;
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues {
  totalBytes: number;
}

export interface LighthouseCoreAuditsJSDisplayValue {
  values: LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues;
  path:   string;
}

export interface LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues {
  itemCount: number;
}

export interface LighthouseCoreAuditsLargeJavascriptLibrariesJSDisplayValue {
  values: LighthouseCoreAuditsLargeJavascriptLibrariesJSDisplayValueValues;
  path:   string;
}

export interface LighthouseCoreAuditsLargeJavascriptLibrariesJSDisplayValueValues {
  libraryCount: number;
}

export interface LighthouseCore {
  values: LighthouseCoreAuditsLoadFastEnoughForPwaJSDisplayValueTextValues;
  path:   string;
}

export interface LighthouseCoreAuditsLoadFastEnoughForPwaJSDisplayValueTextValues {
  timeInMs: number;
}

export interface LighthouseCoreAuditsResourceSummaryJSDisplayValue {
  values: LighthouseCoreAuditsResourceSummaryJSDisplayValueValues;
  path:   string;
}

export interface LighthouseCoreAuditsResourceSummaryJSDisplayValueValues {
  requestCount: number;
  byteCount:    number;
}

export interface LighthouseCoreAuditsSEOJSDisplayValue {
  values: LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues;
  path:   string;
}

export interface LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues {
  decimalProportion: number;
}

export interface LighthouseCoreAuditsValidSourceMapsJSMissingSourceMapItemsWarningMesssage {
  values: LighthouseCoreAuditsValidSourceMapsJSMissingSourceMapItemsWarningMesssageValues;
  path:   string;
}

export interface LighthouseCoreAuditsValidSourceMapsJSMissingSourceMapItemsWarningMesssageValues {
  missingItems: number;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary;
  path:   string;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueElementsFound {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueElementsFoundValues;
  path:   string;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueElementsFoundValues {
  nodeCount: number;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueMSSaving {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary;
  path:   string;
}

export interface RendererFormattedStrings {
  auditGroupExpandTooltip:          string;
  calculatorLink:                   string;
  crcInitialNavigation:             string;
  crcLongestDurationLabel:          string;
  dropdownCopyJSON:                 string;
  dropdownDarkTheme:                string;
  dropdownPrintExpanded:            string;
  dropdownPrintSummary:             string;
  dropdownSaveGist:                 string;
  dropdownSaveHTML:                 string;
  dropdownSaveJSON:                 string;
  dropdownViewer:                   string;
  errorLabel:                       string;
  errorMissingAuditInfo:            string;
  footerIssue:                      string;
  labDataTitle:                     string;
  lsPerformanceCategoryDescription: string;
  manualAuditsGroupTitle:           string;
  notApplicableAuditsGroupTitle:    string;
  opportunityResourceColumnLabel:   string;
  opportunitySavingsColumnLabel:    string;
  passedAuditsGroupTitle:           string;
  runtimeDesktopEmulation:          string;
  runtimeMobileEmulation:           string;
  runtimeNoEmulation:               string;
  runtimeSettingsAxeVersion:        string;
  runtimeSettingsBenchmark:         string;
  runtimeSettingsChannel:           string;
  runtimeSettingsCPUThrottling:     string;
  runtimeSettingsDevice:            string;
  runtimeSettingsFetchTime:         string;
  runtimeSettingsNetworkThrottling: string;
  runtimeSettingsTitle:             string;
  runtimeSettingsUA:                string;
  runtimeSettingsUANetwork:         string;
  runtimeSettingsUrl:               string;
  runtimeUnknown:                   string;
  snippetCollapseButtonLabel:       string;
  snippetExpandButtonLabel:         string;
  thirdPartyResourcesLabel:         string;
  throttlingProvided:               string;
  toplevelWarningsMessage:          string;
  varianceDisclaimer:               string;
  warningAuditsGroupTitle:          string;
  warningHeader:                    string;
}

export interface StackPack {
  id:           string;
  title:        string;
  iconDataURL:  string;
  descriptions: Descriptions;
}

export interface Descriptions {
  "unminified-css":        string;
  "unminified-javascript": string;
  "unused-javascript":     string;
  "server-response-time":  string;
  redirects:               string;
  "user-timings":          string;
  "dom-size":              string;
}

export interface Timing {
  entries: Entry[];
  total:   number;
}

export interface Entry {
  name:        string;
  startTime:   number;
  duration?:   number;
  timingType?: TimingType;
  entryType?:  EntryType;
}

export enum EntryType {
  Measure = "measure",
}
