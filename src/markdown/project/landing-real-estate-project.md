---
title: "Landing Real Estate Project"
date: "2018-06-03"
image: "https://source.unsplash.com/150x150/?house"
keywords: "house"
type: "project"
---

##PROJECT OF REAL ESTATE
 
 
# Landing Project: Real Estate for Landing

## Description of project

1. I build this project with Laravel and Integration with CRM <a href="https://www.tokkobroker.com/" target="_blank">Tokkobroaker</a>  
2. I build an API and returns results in JSON.
3. I build an integration in the frontend with filters in Javascript.

### Link to Project

#### <a href="http://landing.com.ar/" target="_blank">http://landing.com.ar/</a>

### User Stories

1. I can GET properties to <a href="https://landing.com.ar/" target="_blank">https://landing.com.ar/</a> 
2. I can GET properties with some filters to <a href="https://landing.com.ar/buscar" target="_blank">https://landing.com.ar/buscar</a> and I will receive a list of properties with selected filters. Example : <a href="https://www.landing.com.ar/buscar?property\_type=2&operation\_type=1&location=24682" target="_blank">https://www.landing.com.ar/buscar?property\_type=2&operation\_type=1&location=24682</a>
4. When I visit a property to <a href="https://landing.com.ar/buscar" target="_blank">https://landing.com.ar/</a> and I will receive some information for this property. Example <a href="https://www.landing.com.ar/1518730/Departamento---Belgrano---CABA" target="_blank">https://www.landing.com.ar/1518730/Departamento---Belgrano---CABA</a>.
3. I can POST information of appraisal to <a href="https://www.landing.com.ar/tasaciones" target="_blank">https://www.landing.com.ar/tasaciones</a> and I will receive a message of confirmation and I will be contacted by Landing.
4. I can POST information of contact to <a href="https://www.landing.com.ar/contacto" target="_blank">https://www.landing.com.ar/contacto</a> and I will receive a message of confirmation and I will be contacted by Landing.
5. I can GET information about Landing to <a href="https://www.landing.com.ar/nosotros" target="_blank">https://www.landing.com.ar/nosotros</a>

### Search Example:

- GET <a href="https://www.landing.com.ar/api/property" target="_blank">https://www.landing.com.ar/api/property</a> 
    - body (meta,objects,links) :  
        - meta = information about endpoint
        - objects = list of properties
        - links = links about properties search
- GET <a href="https://www.landing.com.ar/api/property/filter" target="_blank">https://www.landing.com.ar/api/property/filter</a> 
    - body (summary about properties in Landing):  
        - property_types: []
        - operation_types: []
        - suite_amount: []
        - room_amount: []
        - roofed_surface: []
        - bathroom_amount: []
        - sublocations: []
        - locations: []
        - states: []
        - age: []
        - tags: []
    - parameters ( parameters can be used to query )
        <table>
            <thead>
                <tr>
                    <th>parameter</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        property_type
                    </td>
                    <td>
                        filter by type property (default = 1,2,3...23 ) 
                    </td>
                </tr>
                <tr>
                    <td>
                        operation_type
                    </td>
                    <td>
                        filter by type operation (default = 1,2,3)
                    </td>
                </tr>
                <tr>
                    <td>
                        price_from
                    </td>
                    <td>
                        filter by price from (default = 0)
                    </td>
                </tr>
                <tr>
                    <td>
                        price_to
                    </td>
                    <td>
                        filter by price to (default = 9999999999)
                    </td>
                </tr>
                <tr>
                    <td>
                        location
                    </td>
                    <td>
                        filter by location id
                    </td>
                </tr>
                <tr>
                    <td>
                        sublocation
                    </td>
                    <td>
                        filter by sublocation id
                    </td>
                </tr>
                 <tr>
                    <td>
                        age
                    </td>
                    <td>
                        filter by age (default = null, type = number)
                    </td>
                </tr>
                <tr>
                    <td>
                        envs
                    </td>
                    <td>
                        filter by envs (default = null, type = number )
                    </td>
                </tr>
                <tr>
                    <td>
                        bathrooms
                    </td>
                    <td>
                        filter by bathroom (default = null, type = number )
                    </td>
                </tr>
                <tr>
                    <td>
                        rooms
                    </td>
                    <td>
                        filter by room (default = null, type = number )
                    </td>
                </tr>
                <tr>
                    <td>
                        roofed_surface
                    </td>
                    <td>
                        filter by roofed surface (default = null, type = number )
                    </td>
                </tr>
                <tr>
                    <td>
                        sort
                    </td>
                    <td>
                        sort results by a certain field
                    </td>
                </tr>
                <tr>
                    <td>
                        page
                    </td>
                    <td>
                        results per page
                    </td>
                </tr>
            </tbody>
            
        </table>

- GET <a href="https://www.landing.com.ar/api/property/starred-properties" target="_blank">https://www.landing.com.ar/api/property/starred-properties</a> 
    - body (data) :  
        Relevant properties of Landing


### Usage:

1.  Index for <a href="http://landing.com.ar/" target="_blank">_Landing_</a> 

2.  Search with filters <a href="http://landing.com.ar/buscar" target="_blank">_/buscar?{queries parameters}_ </a>

3. Property Example <a href="https://www.landing.com.ar/1518730/Departamento---Belgrano---CABA" target="_blank">_/{Id Property}/{Slug}_ </a> 

4.  Appraisal <a href="https://www.landing.com.ar/tasaciones" target="_blank">_/tasaciones_ </a>

5.  About Landing  <a href="https://www.landing.com.ar/nosotros" target="_blank">_/nosotros_ </a>

6.  Contact Landing  <a href="https://www.landing.com.ar/contacto" target="_blank">_/contacto_ </a>