export const IPHONEOS_DEPLOYMENT_TARGET = "10.0";
export const TARGETED_DEVICE_FAMILY = `\"1,2\"`;

export const NSE_PODFILE_SNIPPET = `
target 'OneSignalNotificationServiceExtension' do
  pod 'OneSignalXCFramework', :git => 'https://github.com/MostafaTaghipour/OneSignal-iOS-SDK.git'
end`;

export const NSE_PODFILE_REGEX = /target 'OneSignalNotificationServiceExtension'/;

export const GROUP_IDENTIFIER_TEMPLATE_REGEX = /{{GROUP_IDENTIFIER}}/gm;
