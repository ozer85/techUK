
const cid = cfrequest.cid.substring(0,23) + "-" + cfrequest.cid.substring(23); 
const oid = cfrequest.oid.substring(0,23) + "-" + cfrequest.oid.substring(23); 

req = {
          "oid": oid
      }

resp = $.ajax({
  type: "GET",
  contentType: "application/json",
  url: "https://prod-53.westeurope.logic.azure.com/workflows/5f80459c9f684fcd8898d827f48bc15a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=O3gLlQcvU9kqHgG9VTvzf_N7wOA265LiHD-9q8RbS2g&oid=" + oid,
  success: function(data) {
    if (data) {
      $(".dl-details-list").append("<dt>Authorised Representative</dt><dd>"+ data +"</dd>");
    }
  }
});
