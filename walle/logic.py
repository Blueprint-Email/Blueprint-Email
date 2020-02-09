def return_mess():
    mydict = {
        "subject": "sample_subject", 
        "body": "sample_body",
    }
    return(mydict)

print(return_mess()["subject"])