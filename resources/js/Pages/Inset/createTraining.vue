<template>
    <div>
        <div class="card">
        <div class="card-header">
                <h2 class="card-title">Create Training</h2>
        </div>

         <form>
                <div class="card-body">                   

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label>Name of the training:</label>
                            <input type="text" class="form-control editable_fields" id="trainingName">
                        </div>

                        <div class="col-md-6"> 
                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date">  
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label>Number of participants:</label>
                            <input type="text" class="form-control editable_fields" id="participants">
                        </div> 
                    </div>  

                     <div class="form-group row">
                        <div class="col-md-6">
                            <label>Place or venue:</label>
                            <input type="text" class="form-control editable_fields" id="venue">
                        </div> 
                    </div>            
                </div>
           
                 
            </form>
        </div>
        <div class="row">
            <div class="col-md-9 col-md-offset-8">
                <input type="button" class="btn btn-primary" value="Cancel" id="reset" @click="reset()"/>
                        &nbsp; &nbsp; &nbsp;
                <input type="button" class="btn btn-primary" value="Submit" id="submit" @click="save()"/>
                           
            </div>
        </div> 
    </div>
    
</template>

