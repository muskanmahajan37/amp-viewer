/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#import "AMPKTestHelper.h"

#import "AMPKArticle.h"
#import "AMPKWebViewerJsMessage.h"
#import "AMPKWebViewerJsMessage_private.h"
#import "AMPKWebViewerViewController.h"

#import <OCMock/OCMock.h>

NSString *const kAmpKitTestSourceHostName = @"www.google.com";
static NSString *const kTestBroadcastMessageURLString = @"http://www.nope.com";

@implementation AMPKTestHelper

+ (id)mockWKScriptMessageForType:(AMPKMessageType)type
                            name:(NSString *)name
                       channelID:(NSInteger)channelID
                       requestID:(NSInteger)requestID
                            RSVP:(BOOL)rsvp
                            data:(id)data
                           error:(NSString *)error {
  id jsMessageMock = OCMPartialMock([[WKScriptMessage alloc] init]);

  id wkFrameInfoMock = OCMStrictClassMock([WKFrameInfo class]);
  id nsUrlMock = OCMStrictClassMock([NSURL class]);
  [[[nsUrlMock stub] andReturn:kAmpKitTestSourceHostName] host];
  id nsUrlRequestMock = OCMStrictClassMock([NSURLRequest class]);
  [[[nsUrlRequestMock stub] andReturn:nsUrlMock] URL];
  [[[wkFrameInfoMock stub] andReturn:nsUrlRequestMock] request];

  NSMutableDictionary *scriptData =
      [@{@"app" : @"__AMPHTML__",
         @"type" : [AMPKWebViewerJsMessage stringForMessageType:type],
         @"name" : name,
         @"channelid" : @(channelID),
         @"requestid" : @(requestID),
         @"rsvp" : @(rsvp)}
       mutableCopy];

  if (data) {
    scriptData[@"data"] = data;
  }
  if (error) {
    scriptData[@"error"] = error;
  }

  [[[jsMessageMock stub] andReturn:scriptData] body];

  [[[jsMessageMock stub] andReturn:wkFrameInfoMock] frameInfo];

  return jsMessageMock;
}

+ (AMPKWebViewerViewController *)setupWebViewerViewController {
  NSURL *domainURL = [NSURL URLWithString:@"http://www.google.com"];
  AMPKWebViewerViewController *ampViewer =
      [[AMPKWebViewerViewController alloc] initWithDomainName:domainURL];
  UIView *view = ampViewer.view;
  ((void) view);
  return ampViewer;
}

+ (id)mockViewer {
  return [self mockViewerWithURL:[self testURL]];
}

+ (id)mockViewerWithURL:(NSURL *)url {
  id articleMock = OCMStrictClassMock([AMPKArticle class]);
  [[[articleMock stub] andReturn:url] publisherURL];
  id viewerMock = OCMClassMock([AMPKWebViewerViewController class]);
  [[[viewerMock stub] andReturn:articleMock] article];

  return viewerMock;
}

+ (NSURL *)testURL {
  return [NSURL URLWithString:kTestBroadcastMessageURLString];
}

@end