### New Recon APIs
These APIs are meant to be short and light to distribute the load throughout the app and use less of the UI store.

#### Dashboard
1. Check whether the authenticated user is a guest? `GET` 
2. Company survey for first time users:

   `POST` request
    ```json
    {
        "company_name": "Company X",
        "company_location": "Kenya",
        "banks" : ["NCBA","CITI","STANDARDCHATERED" ...]    
    }
    ```
3. Analytics APIs (to be discussed)
#### Team Management
1. List all users:
    
   `GET` request:
    ```json
    {
       "name": "James Kamau",
       "group" : "Accounts",
       "phone": "(+254) 757-XXX-978",
       "email": "james@companyx.com" , 
       "role": "Finance"  
   }
    ```
   
2. Add User:
     
   `POST` request:
    ```json
    {
       "name": "Mike Kamau",
       "phone": "(+254) 757-XXX-978",
       "email": "mike@companyx.com" , 
       "group" : "Accounts",
       "role": "Finance"  
   }
    ```
   
3. Update user fields:

    This API can take one or multiple of these fields to enabled editing a single field.   
    
    `PUT` request:
    ```json
    {
       "name": "Mike Kamau",
       "phone": "(+254) 757-XXX-978",
       "email": "mike@companyx.com" , 
       "group" : "Accounts",
       "role": "Finance"  
    }
    ```
4. Disable/Enable user
    
    `PUT` request for current authenticated user
    ```json
    {
        "activate": false,
           // OR
        "deactivate": true
    }
    ```
    
5. Fetch permissions (for current user)
    
    I stand guided on the structure here

    `GET` request:
    ```json
    [
     {
       "permissions_category": "Document Level",
       "role_id": "566394804802u4",
       "sub_category": [
           {
            "name" : "Invoice",
            "permissions" : ["view":true, "create":false, "update": true, "approve": false, "delete":false]
           }
           // more here
       ]
       
     }
     // more such as 'user level permissions'  
   ]
    ```
   
6. Update permissions (for current user)

    `PUT` request:
    ```json
    [
     {
       "permissions_category": "Document Level",
       "role_id": "3223445sdh-eh89380239",
       "sub_category": [
           {
            "name" : "Invoice",
            "permissions" : ["view":true, "create":false, "update": true, "approve": false, "delete":false]
           }
           // more here
       ]
       
     }
     // more such as 'user level permissions'  
   ]
    ```

7. Fetch all groups for editing/updating

    Please make this a separate API since it is used by a different component on the UI

    `PUT` request:
    ```json
    [
     {
       "group_id": "23423345435",
       "group_name": "Admin",
       "attached_roles": [
           {"role_id":"3223445sdh-eh89380239", "role_name": "Developer"}
           //...
       ],
       "attached_users": 40
       
     }
     // more groups here 
   ]
    ```
   
8. Create group

    `POST` request:
    ```json
    [
     {
       "group_name": "Admin",
       "attached_roles": ["3223445sdh-eh89380239", "456789867790"],
     }
   ]
    ```
    `RESPONSE` 

    ```json
    [
      {
        "group_id": "3456789-4567897-4532",
        "group_name": "Admin",
        "attached_roles": ["3223445sdh-eh89380239", "456789867790"],
      }
    ]
    ```
   

#### ERP Settings

1. Connected ERP list/Uploads:
    
    `GET` request

    ```json
     [
      {
        "connection_id": "634t7-38463948y-934y348",
        "connection_name": "Quick Books ONLINE",
        "connection_logo": "http://churpy.co/path/to/image.png",
        "data_sync_status" : "complete",
        "connection": "11/04/2022"
      },
      {
       "connection_id":"47v348-67346g-37848hr",
       "connection_name":"csv_Uploads",
       "data_sync_status" : "complete",
       "records_synced" : "23034",
       "connection": "11/04/2022"
      }
    ]
    ```
   
2. Disconnect ERP list/Uploads:
    
    `PUT` request

    ```json
      {
        "connection_id":"47v348-67346g-37848hr",
        "action": "disconnect" // or "connect"
      }
    ```
   
3. Get ERP audit trail:
    
    `GET` request

    ```json
      [
       {
        "connection_id":"47v348-67346g-37848hr",
        "connection_name":"Quick Books online",
        "data": [
                {"date": "2/4/2022 04:56:09", "description": "Something happened", "user": "Moses Kamau" /*plus anything else*/}
           ]
       }
      ]
    ```
   
4. If no ERP is connected yet, Fetch `CODAT` ERPs
    
    `GET` request

    ```json
      [
        {
         "erps_id":"47v348-67346g-37848hr",
         "erp_name":"Quick Books online",
         "auth_redirect_url":"http://server.com/some/auth/endpoint"
        }
      ]
    ```
   
5. Calendly API
    
    `POST` request

    ```json
      {
       "erp_name":"Quick Books online"
      }
    ```
    `RESPONSE` : Calendly redirect URL

#### Upload Data

1. Upload documents/records:

    `POST` request

    ```json
    {
        "data_type": "erp",
        "file": File{},
        "overwrite": false
    }
    ```
   
    `RESPONSE`: some way to check `async` upload/processing status
    
    Finally, return mapping data: `churpy_identifiers` and `suggested_data_columns`

2. Save column mappings
    
    `POST` request

    ```json
     [
       {
         "churpy_column1": "client_column1"  
       }
       // etc
     ]
   ```
   
#### Marketplace
1. Client list

   `GET` request
    
    ```json
    [
     {
        "client_id": "3456787877",
        "client_name": "Client X Ltd",
        "date": "04/22/2016",
        "country": "Kenya",
        "status": "active"
     }
       // more list
   ]
    ```

2. Client details

   `GET` request

    ```json
     {
        "client_id": "3456787877",
        "client_name": "Client X Ltd",
        "date": "04/22/2016",
        "country": "Kenya",
        "status": "active",
        "contacts": [
            {
               "name": "Mike Kamau",
               "phone": "(+254) 757-XXX-978",
               "email": "mike@companyx.com" , 
               "group" : "Accounts",
               "role": "Finance"  
            }
       ],
       "stats": {
               "avg_monthly_sales": "KES 34,500",
               "dso": 12,
               "monthly_outstanding": {"count": 2, "total": "KES 45,000"}
           },
       "invoices": [
         {"invoice_ref": "","date": "","amount": "","description": "","paid": "","recon_status": ""} 
      ]
     }
    ```
   Also provide `filter APIs` for tables (search all, sort columns ) with `pagination`
   
   And the `EXPORT SELECTED` function


3. Invite client contacts

   `POST` request
    
    ```json
    [
       {
        "email": "john@company.com",
        "name": "John Doe",
        "phone": "254700000000",
        "role": "Finance"
       }
       // more here
   ]
    ```
   
#### View Invoice Screen
1. Fetch invoice details:

   `GET` request: `invoice_id` passed

   ```json
   {
      "invoice_id": "093902389283",
      "issue_date": "12/3/22",
      "due_date": "12/5/22",
      "amount": "KES 87,450",
      "reconed_amount": "KES 87,450", // <--- feel free to change based on what we had
      "line_items": [{"description": "","quantity": "","unit_price": "", "tax":"","total": ""}],
      "history": [{"title":"","description": "","date": ""}],
      "counter_party": {"name":"","address": ""}
   }
   ```
   
    `GET` request for adjustments:

   ```json
   [
      {"type": "cn", "date": "", "amount": "", "line_items": ""}, // <--- plus additional details
   ]
   ```

#### Bank Transactions
1. Get bank account list:
   
   `GET` request:

     ```json
      [
         "NCBA - 501*****345",
         "COOP - 349*****746",
         "CITI - 123*****879",
         "KCB - 453*****283"
      ]
      ``` 

2. Fetch paginated bank records by `bank`
   
   Filters
   
   - `Transaction date`
   - `Value date`
   - `Recon Status`
   - `Text global search`
   - `Column Sorting`

   Fetch records: `GET/POST` request: `endpoint/bank_acc_id`

   `RESPONSE`
   ```json
   {
      "bank_account": "KCB - 453*****283",
      "records": {
         "data": [
            {
               "trans_ref": "45623782-3yt38738-723y238",
               "transaction_date": "12/3/22",
               "value_date": "12/6/22",
               "amount": 234353,
               "direction": "CR",
               "description": "some description",
               "counter_party": "Customer X",
               "recon_status": "pending"
            }
         ], // transactions
         "paginator": {
            "current_page": 1,
            "per_page": 10,
            "total_pages": 24,
            // etc
         }
      }
   }
   ```
   
Also provide a file download option for `Exports`

#### Expected Payments
1. Fetch paginated expected payments by `client`
   
   Filters
   
   - `Transaction date`
   - `Value date`
   - `Recon Status`
   - `Text global search`
   - `Column Sorting`

   Fetch records: `GET/POST` request: `endpoint/client_id`

   `RESPONSE`
   ```json
   {
      "client_id": "34-y4893-94934-y394",
      "client": "Client_x",
      "records": {
         "data": [
            {
               "invoice_ref": "45623782-3yt38738-723y238",
               "date": "12/3/22",
               "amount": 234353,
               "description": "some description",
               "paid_status": "tentative",
               "recon_status": "pending"
            }
         ], // transactions
         "paginator": {
            "current_page": 1,
            "per_page": 10,
            "total_pages": 24,
            // etc
         }
      }
   }
   ```
   
Also provide a file download option for `Exports`

#### Account Settings

1. Update personal details:

   `PUT` request

   ```json
      {
         "first_name": "Moses",
         "last_name": "Kamau",
         "email": "moseskamau338@gmail.com",
         "profile_photo": File{},
         "company":"Copany X",
         "role":"Finance", //<-- am not sure about updating this
         "group":"Admin", //<-- am not sure about updating this
      }
   ```
   

2. Update `payment` details:

   `PUT` request

   ```json
      {
         "primary_email": "moseskamau@gmail.com",
         "card_details": {},
         "mobile_one": {
            "mpesa": "sandbox", //or live
            "pesa_link": "live"
         },
            "profile_photo": File{},
         "company":"Copany X",
         "role":"Finance", //<-- am not sure about updating this
         "group":"Admin", //<-- am not sure about updating this
      }
   ```


3. Update `email template` details:

   Fetch `GET` templates
   ```json
   [
      {
         "type": "invoice_overdue_notification",
         "timing": "before",
         "timing_period": "15 days",
         "customers_targetd": [*], // all or list
         "message": "some html text"
      }
   ]
   ```
   
   Update/Create `PUT/POST` request

   ```json
      {
         "tempalte_id": "23423-23t7t37-23t763",
         "timing": "before",
         "timing_period": "14 days",
         "customer_targets": ["1231231","12312333","567686767"],
         "notification_type": "invoice_due_notification",
         "message": "HTML message here"
      }
   ```
   
   Delete `DELETE` template

   ```json
   {
      "template_id": "537830-34t34t76-34yuy4y34"
   }
   ```

#### Reconciliation Intro screen

1. Rules stats:

   `GET` request:

   ```json
   {
      "total_rules": 13,
      "active": "4",
      "inactive": "9",
      "auto": "34", //%
      "suggested": "66", //%
   }
   ```
   
2. Reconciliation Summary

   `GET` request: for `date range`
   
   also make this separate from other APIs, I might need to call the endpoint multiple times

   ```json
   {
      "totals": {
         "sspass": 19029778765,
         "bank_statements": 19329778765
      },
      //chart data:
      {
        "sspass": {
         "manual": {
            "records":3455, 
            "total_value":3465733
            }, 
         "auto":  {
            "records":2567, 
            "total_value":34983
         },
         "suggested":  {
            "records":938473, 
            "total_value":3465733
         }, 
         "pending":  {
            "records":3455, 
            "total_value":3465733
          }
         }, //reconciled statuses records
       "bank_statements": {
          "manual": {
            "records":3455, 
            "total_value":3465733
            }, 
          "auto":  {
            "records":2567, 
            "total_value":34983
         },
         "suggested":  {
            "records":938473, 
            "total_value":3465733
         }, 
         "pending":  {
            "records":3455, 
            "total_value":3465733
          }
         },
      }
   }
   ```
   

#### Reconciliation Table
1. Fetch records (Unreconciled, Partial and Reconciled)

Let this endpoint be separate as well so as to load the data per tab

   `GET` request:
   
   ```json
   [
      {
         "invoice_ref": "45623782-3yt38738-723y238",
         "date": "12/3/22",
         "currency": "KES",
         "amount": 234353,
         "reconciled_amount": 234353,
         "gl_account": "DFG456789-4567",
         "customer": "Customer N",
         "recon_status": "pending",
         "source": "erp"
      }
   ]
   ```

2. Fetch headers/columns

   `GET` request:
   
   ```json
   [
      {"key":"invoice_ref", "label":"Invoice/Bank Ref", "type":"text","selectable":true,"query":null},
      {"key":"date", "label":"Date", "type":"date", "query":null},
      {"key":"currency", "label":"Currency", "type":"select", "options":["KES","USD"], "query":null},
      {"key":"amount", "label":"Amount", "type":"number","query":null},
      {"key":"reconciled_amount", "label":"Reconciled Amount", "type":"number","query":null},
      {"key":"gl_account", "label":"GL/Bank Account", "type":"text","query":null},
      {"key":"customer", "label":"Customer", "type":"text","query":null},
      {"key":"recon_status", "label":"Recon. Status", "type":"text","query":null},
      {"key":"source", "label":"Source", "type":"text","query":null},
    ]
   ```
   
   Filters
   - `Fetch in date range`
   - `Recon Status`
   - `Text global search`
   - `Column Sorting`
   - `Column Searching - for date, text, selection(KES/USD/other) and number(currency)`

Also add functionality for exporting `CSV` and `Excel`

#### Matching process
We do need to discuss on this flow


#### Rules Flow
Designs not yet done