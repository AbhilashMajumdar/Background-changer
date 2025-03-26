export const ctaClickHandler=(viewId,tabSwitch,e,cardTitle="", label = null,optionalArg="")=>{
  const fwaProactiveCareSoftwareFailureFFlag = getFwaProactiveCareSoftwareFailureFFlag();
  if(viewId === "TRG" && fwaProactiveCareSoftwareFailureFFlag){
    const state = Store.getStore().getState();
    const selectedCallKey = state.calls.selectedCallKey;
    Store.dispatch(customerJourneyLVFlow(true, selectedCallKey));
  }
}
