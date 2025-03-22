// product section 
$(function () {
    // Navbar Toggle
    $("#ham").on("click", () => {
        $("#navMenus").toggleClass("serviceOpen");
        $(".h-1").toggleClass("h-cross1");
        $(".h-2").toggleClass("h-cross2");
        $(".h-3").toggleClass("h-cross3");
    });

    // Accessing JSON Data Directly
    const jsonData = {
        "item1": {
            "heading": "PROCESS ANALYTICAL SYSTEMS ENGINEERING",
            "description": "Sembian is Poised to Transform Industrial Manufacturing. Explore the next Generation Automation Architecture The Power of Software with Boundless Automation.",
            "href": "p1.html"
        },
        "item2": {
            "heading": "CONTINUOUS EMISSION MONITORING SYSTEM (CEMS)",
            "description": "This is the description of Item 2.",
            "href": "p2.html"
        },
        "item3": {
            "heading": "STEAM & WATER ANALYSIS SYSTEM (SWAS) ",
            "description": "This is the description of Item 3.",
            "href": "p3.html"
        },
        "item4": {
            "heading": "SAMPLE CONDITIONING SYSTEM",
            "description": "This is the description of Item 4.",
            "href": "p4.html"
        },
        "item5": {
            "heading": "INDUSTRIAL AUTOMATION & CONTROL SYSTEM",
            "description": "This is the description of Item 1.",
            "href": "p5.html"
        },
        "item6": {
            "heading": "GREEN HYDROGEN & FUEL CELL SYSTEMS",
            "description": "This is the description of Item 2.",
            "href": "p6.html"
        },
        "item7": {
            "heading": "INDUSTRIAL ENCLOSURES",
            "description": "This is the description of Item 3.",
            "href": "p7.html"
        },
        "item8": {
            "heading": "ACOUSTICS ENCLOSURES",
            "description": "This is the description of Item 4.",
            "href": "p8.html"
        },
        "item9": {
            "heading": "CUSTOM BUILT SYSTEM FOR R&D LABS",
            "description": "This is the description of Item 4.",
            "href": "p9.html"
        },
        "item10": {
            "heading": "Oil & Gas",
            "description": "This is the description of Item 4.",
            "href": "industries.html"
        },
        "item11": {
            "heading": "Petrochemical",
            "description": "This is the description of Item 1.",
            "href": "industries.html"
        },
        "item12": {
            "heading": "Power",
            "description": "This is the description of Item 2.",
            "href": "industries.html"
        },
        "item13": {
            "heading": "LNG",
            "description": "This is the description of Item 3.",
            "href": "industries.html"
        },
        "item14": {
            "heading": "Fertilizer",
            "description": "This is the description of Item 4.",
            "href": "industries.html"
        },
        "item15": {
            "heading": "Cement",
            "description": "This is the description of Item 4.",
            "href": "industries.html"
        }
    };

    $("#p1").attr("data-value2", JSON.stringify(jsonData.item1));
    $("#p2").attr("data-value2", JSON.stringify(jsonData.item2));
    $("#p3").attr("data-value2", JSON.stringify(jsonData.item3));
    $("#p4").attr("data-value2", JSON.stringify(jsonData.item4));
    $("#p5").attr("data-value2", JSON.stringify(jsonData.item5));
    $("#p6").attr("data-value2", JSON.stringify(jsonData.item6));
    $("#p7").attr("data-value2", JSON.stringify(jsonData.item7));
    $("#p8").attr("data-value2", JSON.stringify(jsonData.item8));
    $("#p9").attr("data-value2", JSON.stringify(jsonData.item9));
    $("#i1").attr("data-value2", JSON.stringify(jsonData.item10));
    $("#i2").attr("data-value2", JSON.stringify(jsonData.item11));
    $("#i3").attr("data-value2", JSON.stringify(jsonData.item12));
    $("#i4").attr("data-value2", JSON.stringify(jsonData.item13));
    $("#i5").attr("data-value2", JSON.stringify(jsonData.item14));
    $("#i6").attr("data-value2", JSON.stringify(jsonData.item15));

    // Main Event Handling
    $(".home-products-menu").on("mouseenter", function () {
        const data = JSON.parse($(this).attr("data-value2"));
        const headingName = data.heading;
        const descriptionData = data.description;
        const src = data.href;

        const declaration = `
        <div class="home-products-contentDeclare col-lg-12">
            <div class="home-products-headingDetails col-lg-12">
                <h6>${headingName}</h6>
                <p>${descriptionData}</p>
            </div>
            <a href="${src}" class="btn-main">Learn More <span>></span></a>
        </div>
    `;

        const container = $(this).closest(".home-products-contentGrid");

        // Remove existing declaration to prevent duplicates
        container.find(".home-products-contentDeclare").remove();

        // Append declaration based on screen size
        if ($(window).width() >= 768) {
            if (container.children(".home-products-contentDeclare").length === 0) {
                container.append(declaration);
            }
        } else {
            $(this).append(declaration);    
        }

        // Mouse leave to remove declaration
        container.on("mouseleave", function () {
            $(this).find(".home-products-contentDeclare").remove();
        });
    });


});